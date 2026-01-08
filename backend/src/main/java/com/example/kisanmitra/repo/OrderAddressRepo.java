package com.example.kisanmitra.repo;

import com.example.kisanmitra.model.OrderAddress;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderAddressRepo extends JpaRepository<OrderAddress,Integer> {
}
