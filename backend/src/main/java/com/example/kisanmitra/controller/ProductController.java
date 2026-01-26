package com.example.kisanmitra.controller;

import com.example.kisanmitra.model.Product;
import com.example.kisanmitra.service.ProductService;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class ProductController {

    @Autowired
    ProductService service;



    @GetMapping("products")
    public List<Product> getAllProducts(){
        return service.fetchAllProducts();
    }
    @GetMapping("product")
    public List<Product> getProducts(@RequestParam(required = false) String search,
                                     @RequestParam(required = false) Product.ProductStatus status){

        return service.searchProducts(search,status);

    }

    @GetMapping("product/{id}")
    public Product getProduct(@PathVariable int id){
        return service.fetchProduct(id);
    }




    @GetMapping("/product/{id}/similar")
    public List<Product> getSimilarProducts(@PathVariable int id){
        return service.getSimilar(id);
    }






}
