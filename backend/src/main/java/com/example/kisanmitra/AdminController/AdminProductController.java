package com.example.kisanmitra.AdminController;

import com.example.kisanmitra.model.Product;
import com.example.kisanmitra.repo.ProductRepo;
import com.example.kisanmitra.service.ProductService;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class AdminProductController {

    @Autowired
    private ProductService productService;

    @PutMapping("product")
    public ResponseEntity<Product> updateProduct(@RequestBody Product product) throws BadRequestException {
        Product updated= productService.updateProduct(product);
        return ResponseEntity.ok(updated);

    }
    @PostMapping("product")
    public ResponseEntity<Product> add(@RequestBody Product product)
    {
        System.out.println("Post Method called");
        Product saved=productService.addProduct(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @DeleteMapping("product/{id}")
    public void deleteitem(@PathVariable int id){
        productService.deleteProduct(id);
    }
}
