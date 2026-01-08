package com.example.kisanmitra.service;

import com.example.kisanmitra.model.User;
import com.example.kisanmitra.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {
    @Autowired
    UserRepo userRepo;
    BCryptPasswordEncoder crypt=new BCryptPasswordEncoder();


    @Transactional
    public User addUser(User user) {
        user.setPassword(crypt.encode(user.getPassword()));
        return userRepo.save(user);
    }
}
