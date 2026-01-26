package com.example.kisanmitra.controller;

import com.example.kisanmitra.model.User;
import com.example.kisanmitra.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    UserService service;

    @PostMapping("/signup")
    public User addUser(@RequestBody User user){
        return service.addUser(user);

    }

    @GetMapping("/me")
    public Map<String,Object> me(Authentication auth){
        return Map.of("username",auth.getName(),
                "roles",auth.getAuthorities());
    }

}
