package com.example.kisanmitra.DTO;

import com.example.kisanmitra.model.Order;
import com.example.kisanmitra.model.Payment;

public class OrderStatusUpdate {

    private String orderNumber;
    private Order.OrderStatus orderStatus;
    private Payment.PaymentStatus paymentStatus;

    public String getOrderNumber() {
        return orderNumber;
    }

    public void setOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
    }

    public Order.OrderStatus getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(Order.OrderStatus orderStatus) {
        this.orderStatus = orderStatus;
    }

    public Payment.PaymentStatus getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(Payment.PaymentStatus paymentStatus) {
        this.paymentStatus = paymentStatus;
    }
}
