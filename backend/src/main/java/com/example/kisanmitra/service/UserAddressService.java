package com.example.kisanmitra.service;


import com.example.kisanmitra.model.User;
import com.example.kisanmitra.model.UserAddress;
import com.example.kisanmitra.repo.UserAddressRepo;
import com.example.kisanmitra.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserAddressService {

    @Autowired
    UserRepo userRepo;

    @Autowired
    UserAddressRepo userAddressRepo;

    public List<UserAddress> getAddresses() {
        Authentication auth= SecurityContextHolder.getContext().getAuthentication();
        String username= auth.getName();

        User user=userRepo.findByUsername(username).orElseThrow(()->new RuntimeException("User not found"));

        return userAddressRepo.findByUser(user);
    }
}
