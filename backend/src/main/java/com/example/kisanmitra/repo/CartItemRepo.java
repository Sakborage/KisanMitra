package com.example.kisanmitra.repo;

import com.example.kisanmitra.model.CartItem;
import com.example.kisanmitra.model.Product;
import com.example.kisanmitra.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CartItemRepo extends JpaRepository<CartItem,Integer> {
    Optional<CartItem> findByUserAndProduct(User user, Product product);

    List<CartItem> findByUser(User user);


    void deleteByUser(User user);

    int countByUser(User user);
}
