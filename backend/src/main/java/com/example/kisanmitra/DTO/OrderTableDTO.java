package com.example.kisanmitra.DTO;

import com.example.kisanmitra.model.Order;
import com.example.kisanmitra.model.Payment;

import java.time.Instant;
import java.util.Date;

public class OrderTableDTO {

    private String orderNumber;
    private String userName;
    private Instant date;
    private double amount;
    private Payment.PaymentMethod paymentMethod;
    private Payment.PaymentStatus paymentStatus;
    private Order.OrderStatus orderStatus;

    public OrderTableDTO(String orderNumber, String userName, Instant date, double amount,Payment.PaymentMethod paymentMethod,  Payment.PaymentStatus paymentStatus, Order.OrderStatus orderStatus) {
        this.orderNumber = orderNumber;
        this.userName=userName;
        this.amount=amount;
        this.date=date;
        this.paymentMethod=paymentMethod;
        this.paymentStatus=paymentStatus;
        this.orderStatus=orderStatus;
    }

    public String getOrderNumber() {
        return orderNumber;
    }

    public void setOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Instant getDate() {
        return date;
    }

    public void setDate(Instant date) {
        this.date = date;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public Payment.PaymentMethod getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(Payment.PaymentMethod paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public Payment.PaymentStatus getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(Payment.PaymentStatus paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public Order.OrderStatus getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(Order.OrderStatus orderStatus) {
        this.orderStatus = orderStatus;
    }
}
