package com.example.kisanmitra.repo;


import com.example.kisanmitra.model.Product;
import jakarta.persistence.LockModeType;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepo extends JpaRepository<Product,Integer> {
    List<Product> findByNameContainingIgnoreCaseAndStatus(String search, Product.ProductStatus productStatus);

    List<Product> findByStatus(Product.ProductStatus productStatus);

    List<Product> findByCategoryAndStatus(String category, Product.ProductStatus productStatus, PageRequest pageRequest);

    List<Product> findByCategoryAndStatusAndIdNot(String category, Product.ProductStatus productStatus,int id, PageRequest of);

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("Select p from Product p where p.id=:id")
    Product findByIdForUpdate(int id);
}
