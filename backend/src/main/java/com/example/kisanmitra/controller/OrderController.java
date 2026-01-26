package com.example.kisanmitra.controller;

import com.example.kisanmitra.DTO.OrderResponse;
import com.example.kisanmitra.DTO.PlaceOrderRequest;
import com.example.kisanmitra.model.Order;
import com.example.kisanmitra.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OrderController {

    @Autowired
    OrderService orderService;

    @PostMapping("/order")
    public Order addOrder(@RequestBody PlaceOrderRequest req){
        return orderService.placeOrder(req);

    }

    @PutMapping("/order/{orderId}")
    public Order cancelOrder(@PathVariable int orderId, @RequestParam Order.OrderStatus status)
    {
        return orderService.cancelOrder(orderId,status);
    }

    @GetMapping("/order")
    public List<OrderResponse> getUserOrders(){
        return orderService.getOrders();
    }

    @GetMapping("/order/{orderNumber}")
    public Order getOrderDetails(@PathVariable String orderNumber){
        System.out.println("API Called For:" +orderNumber);
        return orderService.getOrderByOrderNumber(orderNumber);
    }



}
