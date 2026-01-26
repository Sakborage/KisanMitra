import React from "react";
import "./RatingSection.css";

const RatingSection = ({ rating }) => {
  if (!rating || rating.ratingCount === 0) {
    return <p className="review-text">No ratings yet</p>;
  }
  console.log(rating);

  const ratingStats = [
    { stars: 5, count: rating.fiveStar },
    { stars: 4, count: rating.fourStar },
    { stars: 3, count: rating.threeStar },
    { stars: 2, count: rating.twoStar },
    { stars: 1, count: rating.oneStar },
  ];
  const average =
    rating.ratingCount > 0
      ? (rating.avgRating / rating.ratingCount).toFixed(1)
      : "0.0";

  return (
    <div className="rating-container">
      <h2>Ratings & Reviews</h2>

      <div className="rating-main">
        <div className="rating-left">
          <div className="avg">{average}</div>
          <div className="star">★</div>
          <p>{rating.ratingCount} Ratings</p>
        </div>

        {/* Right */}
        <div className="rating-bars">
          {ratingStats.map((r) => (
            <div className="rating-row" key={r.stars}>
              <span className="label">{r.stars}★</span>

              <div className="bar-bg">
                <div
                  className="bar-fill"
                  style={{
                    width: `${
                      rating.ratingCount
                        ? (r.count / rating.ratingCount) * 100
                        : 0
                    }%`,
                  }}
                />
              </div>

              <span className="count">{r.count}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="review-text">
        Have you used this product? Rate it after delivery.
      </p>
    </div>
  );
};

export default RatingSection;
