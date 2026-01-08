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

    @PostMapping("product")
    public ResponseEntity<Product> add(@RequestBody Product product)
    {
        System.out.println("Post Method called");
         Product saved=service.addProduct(product);
         return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @DeleteMapping("product/{id}")
    public void deleteitem(@PathVariable int id){
        service.deleteProduct(id);
    }

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


    @PutMapping("product")
    public ResponseEntity<Product> updateProduct(@RequestBody Product product) throws BadRequestException {
        Product updated= service.updateProduct(product);
        return ResponseEntity.ok(updated);

    }

    @GetMapping("/product/{id}/similar")
    public List<Product> getSimilarProducts(@PathVariable int id){
        return service.getSimilar(id);
    }






}
