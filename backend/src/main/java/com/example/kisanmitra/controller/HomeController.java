package com.example.kisanmitra.controller;


import com.example.kisanmitra.model.Product;
import com.example.kisanmitra.service.HomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HomeController {

    @Autowired
    private HomeService homeService;

    @GetMapping("/TopProduct")
    public List<Product> getProduct(){
        return homeService.getTopProducts();
    }
}
