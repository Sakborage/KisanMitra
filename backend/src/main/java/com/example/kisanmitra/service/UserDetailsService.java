package com.example.kisanmitra.service;

import com.example.kisanmitra.model.User;
import com.example.kisanmitra.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {

    @Autowired
    UserRepo repo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user=repo.findByUsername(username).orElseThrow(()->new RuntimeException("User Not Found"));

        if(user==null){
            throw new UsernameNotFoundException("User Not Found");
        }

        return new com.example.kisanmitra.model.UserDetails(user);
    }
}
