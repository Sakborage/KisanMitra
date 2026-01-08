package com.example.kisanmitra.controller;

import com.example.kisanmitra.model.UserAddress;
import com.example.kisanmitra.service.UserAddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserAddressController {

    @Autowired
    UserAddressService userAddressService;


    @GetMapping("/address")
    public List<UserAddress> getUseraddress(){
        return userAddressService.getAddresses();

    }
}
