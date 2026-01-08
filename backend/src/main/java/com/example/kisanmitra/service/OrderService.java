package com.example.kisanmitra.service;

import com.example.kisanmitra.DTO.OrderResponse;
import com.example.kisanmitra.DTO.PlaceOrderRequest;
import com.example.kisanmitra.DTO.PricingConstants;
import com.example.kisanmitra.model.*;
import com.example.kisanmitra.repo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class OrderService {

    @Autowired
    private OrderRepo orderRepo;
    @Autowired
    private OrderItemRepo orderItemRepo;
    @Autowired
    private OrderAddressRepo orderAddressRepo;
    @Autowired
    private UserAddressRepo userAddressRepo;
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private CartItemRepo cartItemRepo;
    @Autowired
    private PaymentRepo paymentRepo;

    private OrderResponse mapToOrderResponse(Order order){
        OrderResponse res=new OrderResponse();
        res.setOrderId(order.getId());
        res.setStatus(order.getStatus());
        res.setAddress(order.getAddress());
        res.setPayment(order.getPayment());
        res.setCreatedAt(order.getCreatedAt());
        res.setTotalAmount(order.getTotalAmount());

        res.setItems(order.getOderItems());
        return res;
    }

    @Transactional
    public Order placeOrder(PlaceOrderRequest req){
        Authentication auth= SecurityContextHolder.getContext().getAuthentication();
        String username= auth.getName();

        User user=userRepo.findByUsername(username).
                orElseThrow(()->new RuntimeException("user not found") );

        List<CartItem> cartItemList=cartItemRepo.findByUser(user);
        if(cartItemList.isEmpty()){
            throw new RuntimeException("Cart is Empty");
        }


        Order order=new Order();
        order.setUser(user);
        order.setStatus(Order.OrderStatus.PENDING);

        order=orderRepo.save(order);

        double totalAmount=0;
        List<OrderItem> orderItems=new ArrayList<>();

        for(CartItem cartItem:cartItemList){
            OrderItem orderItem=new OrderItem();
            orderItem.setOrder(order);
            orderItem.setProduct(cartItem.getProduct());
            orderItem.setQuantity(cartItem.getQuantity());
            double price= cartItem.getProduct().getPrice().doubleValue();
            orderItem.setPriceAtpurchase(price);

            totalAmount+=orderItem.getQuantity()*orderItem.getPriceAtpurchase();

            orderItems.add(orderItem);

        }

        OrderAddress address=new OrderAddress();
        address.setOrder(order);

        if(req.getUserAddressId()!=null){
            UserAddress userAddress=userAddressRepo.findById(req.getUserAddressId())
                    .orElseThrow(()->new RuntimeException("Address not found"));

            address.setFullName(userAddress.getFullName());
            address.setPhone(userAddress.getPhone());
            address.setAddressLine1(userAddress.getAddressLine1());
            address.setAddressLine2(userAddress.getAddressLine2());
            address.setCity(userAddress.getCity());
            address.setState(userAddress.getState());
            address.setPincode(userAddress.getPincode());
        }else{
            address.setFullName(req.getFullName());
            address.setPhone(req.getPhone());
            address.setAddressLine1(req.getAddressLine1());
            address.setAddressLine2(req.getAddressLine2());
            address.setCity(req.getCity());
            address.setState(req.getState());
            address.setPincode(req.getPincode());

            UserAddress ua=new UserAddress();
            ua.setUser(user);
            ua.setFullName(req.getFullName());
            ua.setPhone(req.getPhone());
            ua.setAddressLine1(req.getAddressLine1());
            ua.setAddressLine2(req.getAddressLine2());
            ua.setCity(req.getCity());
            ua.setState(req.getState());
            ua.setPincode(req.getPincode());

            userAddressRepo.save(ua);

        }
        orderAddressRepo.save(address);

        Payment payment=new Payment();
        payment.setOrder(order);
        payment.setAmount(totalAmount);
        payment.setPaymentMethod(req.getPaymentMethod());

        payment.setStatus(
                req.getPaymentMethod() == Payment.PaymentMethod.COD
                        ? Payment.PaymentStatus.PENDING
                        : Payment.PaymentStatus.PENDING
        );
        paymentRepo.save(payment);
        order.setAddress(address);
        order.setPayment(payment);
        order.setOderItems(orderItems);
        double itemsTotal=totalAmount;
        double deliveryCharge=itemsTotal>= PricingConstants.FREE_DELIVERY_LIMIT ? 0:PricingConstants.DELIVERY_CHARGE;
        double handlingCharge=PricingConstants.HANDLING_CHARGE;
        double finalPayable=itemsTotal+handlingCharge+deliveryCharge;
        order.setTotalAmount(finalPayable);
        order.setDeliveryCharge(deliveryCharge);
        order.setHandlingCharge(handlingCharge);
        order.setItemsTotal(itemsTotal);
        order.setStatus(Order.OrderStatus.PLACED);

        cartItemRepo.deleteByUser(user);

        return order;
    }


    @Transactional
    public Order cancelOrder(int orderId, Order.OrderStatus status) {

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();

        User user = userRepo.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Order order = orderRepo.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found"));

        boolean isAdmin=auth.getAuthorities().stream()
                .anyMatch(a-> Objects.equals(a.getAuthority(), "ADMIN"));

        if(!isAdmin){
            if (order.getUser().getId()!=(user.getId())) {
                throw new RuntimeException("Unauthorized to cancel this order");
            }
            if(status!= Order.OrderStatus.CANCELLED){
                throw new RuntimeException("User can only cancle Order");
            }
            if (order.getStatus() == Order.OrderStatus.SHIPPED ||
                    order.getStatus() == Order.OrderStatus.DELIVERED) {
                throw new RuntimeException("Order cannot be cancelled now");
            }

        }

        order.setStatus(status);


        if (order.getPayment().getPaymentMethod() != Payment.PaymentMethod.COD) {
            order.getPayment().setStatus(Payment.PaymentStatus.REFUND_PENDING);
        }

        return order;
    }

    public List<OrderResponse> getOrders() {
        Authentication auth=SecurityContextHolder.getContext().getAuthentication();
        String username= auth.getName();

        User user=userRepo.findByUsername(username).orElseThrow(()->new RuntimeException("User Not Found"));
        return orderRepo.findByUserOrderByCreatedAtDesc(user)
                .stream()
                .map(this::mapToOrderResponse)
                .toList();


    }

    public OrderResponse getOrderOfUser(int orderId) {

        Authentication auth=SecurityContextHolder.getContext().getAuthentication();
        String username=auth.getName();

        User user=userRepo.findByUsername(username).orElseThrow(()->
                new RuntimeException("User not Found"));

        Order order=orderRepo.findById(orderId).orElseThrow(
                ()-> new RuntimeException("Order not Found")
        );

        if(user.getId()!=order.getUser().getId()){
            throw new RuntimeException("UnAuthorozed");
        }

        return mapToOrderResponse(order);
    }

    public List<OrderResponse> getAll(Order.OrderStatus status) {
        List<Order> orders;
        if(status!=null){
            orders=orderRepo.findByStatus(status);
        }else{
            orders=orderRepo.findAll();
        }

        return orders.stream().map(this::mapToOrderResponse).toList();
    }
}
