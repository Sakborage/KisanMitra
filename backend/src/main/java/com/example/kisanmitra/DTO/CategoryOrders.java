package com.example.kisanmitra.DTO;

public class CategoryOrders {
    private String category;
    private long orderCount;

    public CategoryOrders(String category,long orderCount) {
        this.category = category;
        this.orderCount=orderCount;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public long getOrderCount() {
        return orderCount;
    }

    public void setOrderCount(long orderCount) {
        this.orderCount = orderCount;
    }
}
