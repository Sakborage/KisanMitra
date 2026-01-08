package com.example.kisanmitra.controller;

import com.example.kisanmitra.model.User;
import com.example.kisanmitra.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    UserService service;

    @PostMapping("/signup")
    public User addUser(@RequestBody User user){
        return service.addUser(user);

    }
}
