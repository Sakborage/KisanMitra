package com.example.kisanmitra.repo;

import com.example.kisanmitra.DTO.CategoryOrders;
import com.example.kisanmitra.DTO.OrderTableDTO;
import com.example.kisanmitra.DTO.TopProduct;
import com.example.kisanmitra.model.Order;
import com.example.kisanmitra.model.Product;
import com.example.kisanmitra.model.User;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

public interface OrderRepo extends JpaRepository<Order,Integer> {
    List<Order> findByUser(User user);

    @Query("""
SELECT o
FROM Order o
WHERE o.user = :user
  AND o.orderNumber IS NOT NULL
ORDER BY o.createdAt DESC
""")
    List<Order> findByUserOrderByCreatedAtDesc(User user);


    List<Order> findByStatus(Order.OrderStatus status);



    @Query(""" 
            select new com.example.kisanmitra.DTO.CategoryOrders(p.category, Count(oi)) from
            OrderItem oi JOIN oi.product p group by p.category
            """)
    List<CategoryOrders> getOrdersByCategory();


    @Query("""
SELECT new com.example.kisanmitra.DTO.TopProduct(
    p.id,
    p.name,
    SUM(oi.quantity)
)
FROM OrderItem oi
JOIN oi.product p
GROUP BY p.id, p.name
ORDER BY SUM(oi.quantity) DESC
""")
    List<TopProduct> getTopSellingProducts(Pageable pageable);


    @Query("""
            select new com.example.kisanmitra.DTO.OrderTableDTO(
            o.orderNumber,
            u.username,
            o.createdAt,
            o.totalAmount,
            p.paymentMethod,
            p.status,
            o.status
            ) from Order o 
            join o.user u
            join o.payment p
            where o.orderNumber is not null
            order by o.createdAt desc
            """)
    List<OrderTableDTO> findAllAdminOrders();

    Optional<Order> findByOrderNumber(String orderNumber);


    @Query("""
SELECT p
FROM OrderItem oi
JOIN oi.product p
GROUP BY p.id, p.name
ORDER BY SUM(oi.quantity) DESC
""")
    List<Product> getTopSellingProductsForHome(Pageable pageable);

}
