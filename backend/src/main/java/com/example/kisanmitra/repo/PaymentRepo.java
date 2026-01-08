package com.example.kisanmitra.repo;

import com.example.kisanmitra.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepo extends JpaRepository<Payment,Integer> {
}
