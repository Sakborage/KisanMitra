import { useState } from "react";
import styles from "./OrderCard.module.css";
import { FaStar, FaEllipsisV } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function OrderCard({ order, onCancelOrder, onSubmitRating }) {
  console.log(order);
  const [rating, setRating] = useState(order.userRating || 0);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const isDelivered = order.status === "DELIVERED";
  const isPlaced = order.status === "PLACED";
  const firstItem = order.items?.[0];

  if (!firstItem) return null;

  const handleCardClick = () => navigate(`/order/${order.orderNumber}`);

  const handleCancel = () => {
    setShowMenu(false);
    if (window.confirm("Are you sure you want to cancel this order?")) {
      onCancelOrder(order.orderId);
    }
  };

  const handleStarClick = (star, e) => {
    e.stopPropagation();
    if (order.isRated) return; // Prevent click if already rated
    setRating(star);
    onSubmitRating(firstItem.product.id, star, order.orderId, "");
  };

  return (
    <div className={styles.card} onClick={handleCardClick}>
      {/* 3 DOTS MENU */}
      {isPlaced && (
        <div className={styles.menuWrapper}>
          <FaEllipsisV
            className={styles.menuIcon}
            onClick={(e) => {
              e.stopPropagation();
              setShowMenu((prev) => !prev);
            }}
          />
          {showMenu && (
            <div className={styles.menu}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCancel();
                }}
                className={styles.cancelBtn}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      )}

      {/* Product Image */}
      <img
        src={firstItem.product.img_url}
        alt={firstItem.product.name}
        className={styles.image}
      />

      {/* Product Info */}
      <div className={styles.info}>
        <h4 className={styles.name}>{firstItem.product.name}</h4>

        {/* Payment Info */}
        {order.status !== "CANCELLED" && (
          <p className={styles.payment}>
            ₹{order.totalAmount}
            <span
              className={`${styles.paymentStatus} ${styles[order.payment.status]}`}
            >
              {order.payment.status}
            </span>
          </p>
        )}

        <p className={`${styles.status} ${styles[order.status]}`}>
          {order.status}
        </p>

        {/* Rating */}
        {isDelivered && (
          <div className={styles.rating}>
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                size={20}
                className={star <= rating ? styles.activeStar : styles.star}
                onClick={
                  order.isRated ? undefined : (e) => handleStarClick(star, e)
                }
                style={{ cursor: order.isRated ? "default" : "pointer" }}
              />
            ))}

            <span className={styles.rateText}>
              {order.isRated
                ? `You rated ${rating}★`
                : rating > 0
                  ? `You rated ${rating}★`
                  : "Rate this product"}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderCard;
