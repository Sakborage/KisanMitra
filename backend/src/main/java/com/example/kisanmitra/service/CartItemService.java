package com.example.kisanmitra.service;

import com.example.kisanmitra.DTO.CartResponse;
import com.example.kisanmitra.model.CartItem;
import com.example.kisanmitra.model.Product;
import com.example.kisanmitra.model.User;
import com.example.kisanmitra.repo.CartItemRepo;
import com.example.kisanmitra.repo.ProductRepo;
import com.example.kisanmitra.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Service
public class CartItemService {

    @Autowired
    UserRepo userRepo;
    @Autowired
    ProductRepo productRepo;

    @Autowired
    CartItemRepo cartItemRepo;

    @Transactional
    public CartItem addToCart(int productId, int quantity) {

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
        System.out.println("Username: "+username);

        User user = userRepo.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User Not Found"));

        Product product = productRepo.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product Not Found"));

        CartItem item = cartItemRepo
                .findByUserAndProduct(user, product)
                .orElse(null);

        if (item == null) {
            item = new CartItem();
            item.setUser(user);
            item.setProduct(product);
            item.setQuantity(quantity);
            cartItemRepo.save(item);
        } else {
            item.setQuantity(item.getQuantity() + quantity);
        }

        return item;
    }

    public List<CartResponse> getUserCart() {

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();

        User user = userRepo.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not Found"));

        return cartItemRepo.findByUser(user)
                .stream()
                .map(item -> {
                    CartResponse dto = new CartResponse();
                    dto.setCartItemId(item.getId());
                    dto.setProductId(item.getProduct().getId());
                    dto.setName(item.getProduct().getName());
                    dto.setPrice(item.getProduct().getPrice());
                    dto.setImage(item.getProduct().getImg_url());
                    dto.setQuantity(item.getQuantity());
                    return dto;
                })
                .toList();
    }


    @Transactional
    public void removeFromCart(int cartItemId) {

        CartItem item = cartItemRepo.findById(cartItemId)
                .orElseThrow(() -> new RuntimeException("Cart item not found"));

        cartItemRepo.delete(item);
    }

    @Transactional
    public void updateCartItem(int cartItemId,int quantity) {

        if(quantity<=0){
            throw new RuntimeException("Quantity must be greater than 1");
        }

        CartItem item=cartItemRepo.findById(cartItemId).orElseThrow(()->
                new RuntimeException("No item Present"));

        item.setQuantity(quantity);



    }

    public int getCartItemCount() {

        Authentication auth=SecurityContextHolder.getContext().getAuthentication();
        String Username= auth.getName();

        User user=userRepo.findByUsername(Username).orElseThrow(()->new RuntimeException("User Not Found"));
        return cartItemRepo.countByUser(user);
    }
}
