package com.example.kisanmitra.service;


import com.example.kisanmitra.DTO.TopProduct;
import com.example.kisanmitra.model.Product;
import com.example.kisanmitra.repo.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HomeService {

    @Autowired
    private OrderRepo orderRepo;

    public List<Product> getTopProducts() {
       return orderRepo.getTopSellingProductsForHome(PageRequest.of(0,3));
    }
}
