package com.example.kisanmitra.DTO;


import java.util.List;

public class DashboardResponse {
     private long totalOrders;
     private long totalUsers;
     private long totalProducts;

     private List<CategoryOrders> ordersByCategory;
     private List<TopProduct> topSellingProducts;

    public long getTotalOrders() {
        return totalOrders;
    }

    public void setTotalOrders(long totalOrders) {
        this.totalOrders = totalOrders;
    }

    public long getTotalUsers() {
        return totalUsers;
    }

    public void setTotalUsers(long totalUsers) {
        this.totalUsers = totalUsers;
    }

    public long getTotalProducts() {
        return totalProducts;
    }

    public void setTotalProducts(long totalProducts) {
        this.totalProducts = totalProducts;
    }

    public List<CategoryOrders> getOrdersByCategory() {
        return ordersByCategory;
    }

    public void setOrdersByCategory(List<CategoryOrders> ordersByCategory) {
        this.ordersByCategory = ordersByCategory;
    }

    public List<TopProduct> getTopSellingProducts() {
        return topSellingProducts;
    }

    public void setTopSellingProducts(List<TopProduct> topSellingProducts) {
        this.topSellingProducts = topSellingProducts;
    }
}
