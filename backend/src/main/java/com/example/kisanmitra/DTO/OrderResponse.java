package com.example.kisanmitra.DTO;

import com.example.kisanmitra.model.Order;
import com.example.kisanmitra.model.OrderAddress;
import com.example.kisanmitra.model.OrderItem;
import com.example.kisanmitra.model.Payment;

import java.time.Instant;
import java.util.List;

public class OrderResponse {

    private int orderId;
    private Order.OrderStatus status;
    private double totalAmount;
    private Instant createdAt;
    private List<OrderItem> items;
    private OrderAddress address;
    private Payment payment;

    public Order.OrderStatus getStatus() {
        return status;
    }

    public void setStatus(Order.OrderStatus status) {
        this.status = status;
    }

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }

    public List<OrderItem> getItems() {
        return items;
    }

    public void setItems(List<OrderItem> items) {
        this.items = items;
    }

    public OrderAddress getAddress() {
        return address;
    }

    public void setAddress(OrderAddress address) {
        this.address = address;
    }

    public Payment getPayment() {
        return payment;
    }

    public void setPayment(Payment payment) {
        this.payment = payment;
    }
}
