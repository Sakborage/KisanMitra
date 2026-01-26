package com.example.kisanmitra.repo;

import com.example.kisanmitra.model.Order;
import com.example.kisanmitra.model.Product;
import com.example.kisanmitra.model.Ratings;
import com.example.kisanmitra.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface RatingRepo extends JpaRepository<Ratings,Integer> {


    Optional<Ratings> findByUserAndProduct(User user, Product product);


    @Query("""
       SELECT r.ratings, COUNT(r)
       FROM Ratings r
       WHERE r.product.id = :productId
       GROUP BY r.ratings
                          """)
    List<Object[]> countRatingsByClassification(@Param("productId") int productId);





    @Query("""
            select AVG(r.ratings),count(r)
            from Ratings r
            where r.product.id= :productId
            """)
    List<Object[]> getAverageAndCount(int productId);

    boolean existsByUserAndProductAndOrder(User user, Product product, Order order);

    boolean existsByUserAndOrder(User user, Order order);

    Optional<Ratings> findByUserAndOrder(User user, Order order);
}
