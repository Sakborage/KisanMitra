package com.example.kisanmitra.DTO;

public class RatingResponse {

    private double avgRating;
    private long ratingCount;

    private long fiveStar;
    private long fourStar;
    private long threeStar;
    private long twoStar;
    private long oneStar;

//    public RatingResponse(double avgRating,long ratingCount,long fiveStar,long fourStar,long threeStar,long twoStar,long oneStar) {
//        this.avgRating = avgRating;
//        this.ratingCount=ratingCount;
//        this.fiveStar=fiveStar;
//        this.fourStar=fourStar;
//        this.threeStar=threeStar;
//        this.twoStar=twoStar;
//        this.oneStar=oneStar;
//    }

    public double getAvgRating() {
        return avgRating;
    }

    public void setAvgRating(double avgRating) {
        this.avgRating = avgRating;
    }

    public long getRatingCount() {
        return ratingCount;
    }

    public void setRatingCount(long ratingCount) {
        this.ratingCount = ratingCount;
    }

    public long getFiveStar() {
        return fiveStar;
    }

    public void setFiveStar(long fiveStar) {
        this.fiveStar = fiveStar;
    }

    public long getFourStar() {
        return fourStar;
    }

    public void setFourStar(long fourStar) {
        this.fourStar = fourStar;
    }

    public long getThreeStar() {
        return threeStar;
    }

    public void setThreeStar(long threeStar) {
        this.threeStar = threeStar;
    }

    public long getTwoStar() {
        return twoStar;
    }

    public void setTwoStar(long twoStar) {
        this.twoStar = twoStar;
    }

    public long getOneStar() {
        return oneStar;
    }

    public void setOneStar(long oneStar) {
        this.oneStar = oneStar;
    }
}
