package com.example.kisanmitra.AdminController;

import com.example.kisanmitra.DTO.DashboardResponse;
import com.example.kisanmitra.DTO.OrderResponse;
import com.example.kisanmitra.DTO.OrderStatusUpdate;
import com.example.kisanmitra.DTO.OrderTableDTO;
import com.example.kisanmitra.model.Order;
import com.example.kisanmitra.model.Payment;
import com.example.kisanmitra.model.Product;
import com.example.kisanmitra.service.AdminService;
import com.example.kisanmitra.service.OrderService;
import com.example.kisanmitra.service.ProductService;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminOrderController {

    @Autowired
    OrderService orderService;

    @Autowired
    private AdminService adminService;


    @GetMapping("/")
    public DashboardResponse getStatData(){
        return adminService.getData();

    }


    @GetMapping("/order/{orderNumber}")
    public Order getOrderDetails(@PathVariable String orderNumber){
        System.out.println("API Called For:" +orderNumber);
        return orderService.getOrderByOrderNumber(orderNumber);
    }

    @GetMapping("/order")
    public List<OrderTableDTO> getAllOrders(){
        return orderService.getAll();
    }

    @PutMapping("/order")
    public Order updateStatus(@RequestBody OrderStatusUpdate req){
        String orderNumber=req.getOrderNumber();
        Order.OrderStatus orderStatus=req.getOrderStatus();
        Payment.PaymentStatus paymentStatus=req.getPaymentStatus();

        return orderService.updateOrderStatus(orderNumber,orderStatus,paymentStatus);
    }







}
