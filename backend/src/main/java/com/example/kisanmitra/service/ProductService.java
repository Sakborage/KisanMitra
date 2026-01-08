package com.example.kisanmitra.service;

import com.example.kisanmitra.exception.ResourceNotFoundException;
import com.example.kisanmitra.model.Product;
import com.example.kisanmitra.repo.ProductRepo;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    ProductRepo repo;

    @Transactional
    public Product addProduct(Product product)
    {
         System.out.println("Service method called");
         return repo.save(product);
    }

    public void deleteProduct(int id) {
       if(repo.existsById(id)){
           repo.deleteById(id);
       }
    }

    public List<Product> fetchAllProducts() {

        return repo.findAll();
    }

    public Product fetchProduct(int id) {
       Optional<Product> product= repo.findById(id);
       return product.orElse(null);
    }


    @Transactional
    public Product updateProduct(Product product) throws BadRequestException {
        if (product == null || product.getId() == 0) {
            throw new BadRequestException("Product id is required for update");
        }

        Product existing = repo.findById(product.getId())
                .orElseThrow(() -> new ResourceNotFoundException("Product with id " + product.getId() + " not found"));

        // Overwrite allowed fields (same as your code)
        existing.setName(product.getName());
        existing.setCategory(product.getCategory());
        existing.setCautions(product.getCautions());
        existing.setDescription(product.getDescription());
        existing.setPrice(product.getPrice());
        existing.setImg_url(product.getImg_url());
        existing.setProductDetails(product.getProductDetails());
        existing.setStatus(product.getStatus());
        existing.setStock(product.getStock());
        existing.setWeight(product.getWeight());
        existing.setVendor(product.getVendor());
        return repo.save(existing);
    }

    public List<Product> searchProducts(String search, Product.ProductStatus status) {
        if (search != null && status != null) {
            return repo.findByNameContainingIgnoreCaseAndStatus(search, status);
        }

        if (search != null) {
            return repo.findByNameContainingIgnoreCaseAndStatus(search, Product.ProductStatus.ACTIVE);
        }

        if (status != null) {
            return repo.findByStatus(status);
        }

        return repo.findAll();
    }

    public List<Product> getSimilar(int id) {
        Product product=repo.findById(id).
                orElseThrow(()->new RuntimeException("Product not found"));

        return repo.findByCategoryAndStatusAndIdNot(product.getCategory(), Product.ProductStatus.ACTIVE,id, PageRequest.of(0,4));
    }
}
