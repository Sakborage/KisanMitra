package com.example.kisanmitra.controller;

import com.example.kisanmitra.DTO.CartResponse;
import com.example.kisanmitra.model.CartItem;
import com.example.kisanmitra.service.CartItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CartItemController {

    @Autowired
    CartItemService cartItemService;

    @PostMapping("/cart")
    public CartItem addItem(@RequestParam int productId, @RequestParam int quantity){
        return cartItemService.addToCart(productId,quantity);

    }

    @GetMapping("/cart")
    public List<CartResponse> getCart(){
        return cartItemService.getUserCart();
    }

    @DeleteMapping("/cart/{cartItemId}")
    public void removeItem(@PathVariable int cartItemId){
         cartItemService.removeFromCart(cartItemId);
    }

    @PutMapping("/cart/{cartItemId}")
    public void updateQuantity(@PathVariable int cartItemId,@RequestParam int quantity){
        cartItemService.updateCartItem(cartItemId,quantity);

    }
}
