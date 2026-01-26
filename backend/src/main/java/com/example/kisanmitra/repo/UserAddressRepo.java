package com.example.kisanmitra.repo;

import com.example.kisanmitra.model.User;
import com.example.kisanmitra.model.UserAddress;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserAddressRepo extends JpaRepository<UserAddress,Integer> {
    List<UserAddress> findByUser(User user);
    List<UserAddress>findFirst2ByUser(User user);
}
