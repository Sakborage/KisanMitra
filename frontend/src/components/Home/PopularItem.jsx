import React from "react";
import styles from "./ProductItem.module.css";
import { FaStar } from "react-icons/fa"; // for ratings
import tomato from "../../assets/images/tomato.jpg";

export default function ProductItem({ product }) {
  return (
    <div className={styles.card}>
      <div className={styles.imgBox}>
        <img src={tomato} alt={product.name} />
      </div>

      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.desc}>{product.description}</p>

      <p className={styles.vendor}>Vendor: {product.vendor}</p>

      <div className={styles.rating}>
        {Array.from({ length: product.rating }).map((_, i) => (
          <FaStar key={i} className={styles.star} />
        ))}
      </div>
    </div>
  );
}
