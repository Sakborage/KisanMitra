import React from "react";
import styles from "./ItemDetail.module.css";
import RatingSection from "./RatingSection";
import axios from "axios";
import { useCart } from "../CartContext";
import { fetchCartCount } from "../fetchCartCount";

const formatWeight = (weight) => {
  if (!weight) return "";
  return weight >= 1000 ? `${(weight / 1000).toFixed(1)} kg` : `${weight} g`;
};

function ItemDetail({ product, rating }) {
  if (!product) return null;
  const { cartCount, setCartCount } = useCart();

  const handleAddToCart = async () => {
    try {
      await axios.post("http://localhost:8080/cart", null, {
        params: {
          productId: product.id,
          quantity: 1,
        },
        withCredentials: true,
      });
      alert("Product added to cart");

      const count = await fetchCartCount();
      console.log(count);
      setCartCount(count);
    } catch (err) {
      console.error("Add to cart failed", err);
      alert("Please login to add product to cart");
    }
  };

  const handleBuyNow = async () => {
    try {
      await handleAddToCart();
      // later → navigate to checkout
    } catch {}
  };

  return (
    <div className={styles.pageContainer}>
      {/* LEFT SECTION */}
      <div className={styles.leftSection}>
        <img
          src={product.img_url}
          alt={product.name}
          className={styles.productImg}
        />

        <div className={styles.actionButtons}>
          <button className={styles.addToCart} onClick={handleAddToCart}>
            Add to Cart
          </button>

          <button className={styles.buyNow} onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className={styles.rightSection}>
        <h2 className={styles.title}>{product.name}</h2>

        <p className={styles.vendor}>
          Sold by <strong>{product.vendor}</strong>
        </p>

        <p className={styles.weight}>
          Pack Size: {formatWeight(product.weight)}
        </p>

        <p className={styles.description}>{product.description}</p>

        <div className={styles.ratingBox}>
          ⭐ <span>{product.avgRating / product.ratingCount}</span> |{" "}
          {product.ratingCount} Ratings
        </div>

        <div className={styles.priceBox}>
          <span className={styles.price}>₹{product.price}</span>
        </div>

        {/* PRODUCT DETAILS */}
        <h3>Product Details</h3>
        <ul className={styles.detailsList}>
          {product.productDetails?.length > 0 ? (
            product.productDetails.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))
          ) : (
            <li>No details available</li>
          )}
        </ul>

        {/* CAUTIONS */}
        <h3>Cautions</h3>
        <ul className={styles.detailsList}>
          {product.cautions?.length > 0 ? (
            product.cautions.map((caution, index) => (
              <li key={index}>{caution}</li>
            ))
          ) : (
            <li>No cautions listed</li>
          )}
        </ul>
        <div className={styles.ratingBox}>
          ⭐ <span>{rating?.avgRating || 0}</span> | {rating?.ratingCount || 0}{" "}
          Ratings
        </div>

        <RatingSection rating={rating} />
      </div>
    </div>
  );
}

export default ItemDetail;
