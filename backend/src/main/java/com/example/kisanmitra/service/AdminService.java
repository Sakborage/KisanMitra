package com.example.kisanmitra.service;

import com.example.kisanmitra.DTO.DashboardResponse;
import com.example.kisanmitra.repo.OrderRepo;
import com.example.kisanmitra.repo.ProductRepo;
import com.example.kisanmitra.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    @Autowired
    private ProductRepo productRepo;
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private OrderRepo orderRepo;

  public DashboardResponse getData(){
      DashboardResponse res=new DashboardResponse();
      res.setTotalOrders(orderRepo.count());
      res.setTotalProducts(productRepo.count());
      res.setTotalUsers(userRepo.count());

      res.setOrdersByCategory(orderRepo.getOrdersByCategory());

      res.setTopSellingProducts(orderRepo.getTopSellingProducts(PageRequest.of(0,5)));

      return res;
  }
}
