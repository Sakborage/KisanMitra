package com.example.kisanmitra.controller;

import com.example.kisanmitra.DTO.RatingRequest;
import com.example.kisanmitra.DTO.RatingResponse;
import com.example.kisanmitra.model.Ratings;
import com.example.kisanmitra.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class RatingController {

    @Autowired
   private RatingService ratingService;


    @PostMapping("/rating")
    public void submitRatings(@RequestBody RatingRequest req){
        ratingService.submit(req);

    }

    @GetMapping("/rating/{productId}")
    public RatingResponse getRatings(@PathVariable int productId){

       return ratingService.getProductRatings(productId);
    }
}
