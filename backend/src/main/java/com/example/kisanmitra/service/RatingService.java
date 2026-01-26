package com.example.kisanmitra.service;

import com.example.kisanmitra.DTO.OrderResponse;
import com.example.kisanmitra.DTO.RatingRequest;
import com.example.kisanmitra.DTO.RatingResponse;
import com.example.kisanmitra.model.Order;
import com.example.kisanmitra.model.Product;
import com.example.kisanmitra.model.Ratings;
import com.example.kisanmitra.model.User;
import com.example.kisanmitra.repo.OrderRepo;
import com.example.kisanmitra.repo.ProductRepo;
import com.example.kisanmitra.repo.RatingRepo;
import com.example.kisanmitra.repo.UserRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RatingService {

    @Autowired
    private RatingRepo ratingRepo;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private ProductRepo productRepo;

    @Autowired
    private OrderRepo orderRepo;

    @Transactional
    public void submit(RatingRequest req) {

       if(req.getRating()<1 || req.getRating()>5){
           throw new RuntimeException("Rating should be between 1 to 5");
       }

       Authentication auth= SecurityContextHolder.getContext().getAuthentication();
       String username= auth.getName();

       User user=userRepo.findByUsername(username).orElseThrow(()->new RuntimeException("User Not Found"));

       Product product=productRepo.findById(req.getProductId()).orElseThrow(()->new RuntimeException("Product not Found"));

       Order order=orderRepo.findById(req.getOrderId()).orElseThrow(()->new RuntimeException("Order Not Found"));

       boolean alreadyRated = ratingRepo
                .existsByUserAndProductAndOrder(user, product, order);

        if (alreadyRated) {
            throw new RuntimeException("Already rated this order");
        }

        Ratings rating = new Ratings();
        rating.setUser(user);
        rating.setProduct(product);
        rating.setOrder(order);
        rating.setRatings(req.getRating());
        rating.setComment(req.getComment());

        ratingRepo.save(rating);

        product.setRatingCount(product.getRatingCount() + 1);
        product.setAvgRating(product.getAvgRating() + req.getRating());
        productRepo.save(product);

    }

    public RatingResponse getProductRatings(int productId) {

        RatingResponse res = new RatingResponse();

        List<Object[]> avgList = ratingRepo.getAverageAndCount(productId);

        if (!avgList.isEmpty()) {
            Object[] avgAndCount = avgList.get(0);

            res.setAvgRating(avgAndCount[0] == null ? 0.0 :
                    ((Number) avgAndCount[0]).doubleValue());

            res.setRatingCount(avgAndCount[1] == null ? 0L :
                    ((Number) avgAndCount[1]).longValue());
        }

        List<Object[]> objects =
                ratingRepo.countRatingsByClassification(productId);

        for (Object[] row : objects) {
            int star = ((Number) row[0]).intValue();
            long count = ((Number) row[1]).longValue();

            switch (star) {
                case 5 -> res.setFiveStar(count);
                case 4 -> res.setFourStar(count);
                case 3 -> res.setThreeStar(count);
                case 2 -> res.setTwoStar(count);
                case 1 -> res.setOneStar(count);
            }
        }

        return res;
    }

}
