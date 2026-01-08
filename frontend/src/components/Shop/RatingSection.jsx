import React from "react";
import "./RatingSection.css";

const RatingSection = () => {
  // Static sample data
  const ratingStats = [
    { stars: 5, count: 16, color: "#4caf50" },
    { stars: 4, count: 5, color: "#8bc34a" },
    { stars: 3, count: 1, color: "#cddc39" },
    { stars: 2, count: 4, color: "#ff9800" },
    { stars: 1, count: 2, color: "#f44336" },
  ];

  const totalRatings = ratingStats.reduce((sum, r) => sum + r.count, 0);
  const avgRating = (
    ratingStats.reduce((sum, r) => sum + r.stars * r.count, 0) / totalRatings
  ).toFixed(1);

  return (
    <div className="rating-container">
      <h2>Ratings & Reviews</h2>

      <div className="rating-main">
        {/* Left Big Rating Block */}
        <div className="rating-left">
          <div className="avg">{avgRating}</div>
          <div className="star">★</div>
          <p>{totalRatings} Ratings & 0 Reviews</p>
        </div>

        {/* Right Rating Bars */}
        <div className="rating-bars">
          {ratingStats.map((r) => (
            <div className="rating-row" key={r.stars}>
              <span className="label">{r.stars}★</span>

              <div className="bar-bg">
                <div
                  className="bar-fill"
                  style={{
                    width: `${(r.count / totalRatings) * 100}%`,
                    background: r.color,
                  }}
                ></div>
              </div>

              <span className="count">{r.count}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="review-text">
        Have you used this product? Be the first to review!
      </p>
    </div>
  );
};

export default RatingSection;
