package com.example.kisanmitra.repo;

import com.example.kisanmitra.model.Order;
import com.example.kisanmitra.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Arrays;
import java.util.List;

public interface OrderRepo extends JpaRepository<Order,Integer> {
    List<Order> findByUser(User user);

    List<Order> findByUserOrderByCreatedAtDesc(User user);

    List<Order> findByStatus(Order.OrderStatus status);
}
