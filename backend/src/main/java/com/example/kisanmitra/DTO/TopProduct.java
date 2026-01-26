package com.example.kisanmitra.DTO;

public class TopProduct {
    private int productId;
    private String name;
    private long soldQuantity;

    public TopProduct(int productId,String name,long soldQuantity) {
        this.productId = productId;
        this.name=name;
        this.soldQuantity=soldQuantity;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getSoldQuantity() {
        return soldQuantity;
    }

    public void setSoldQuantity(long soldQuantity) {
        this.soldQuantity = soldQuantity;
    }
}
