import React from "react";
import styles from "./Section2.module.css";

function Section2({ products, loading }) {
  if (loading) return <p>Loading products...</p>;
  if (!products || products.length === 0) return <p>No products available</p>;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.subTitle}>Featured</p>
        <h2 className={styles.mainTitle}>Featured Products</h2>
        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <img
                src={product.img_url}
                alt={product.name}
                className={styles.image}
              />

              <p className={styles.label}>Products</p>

              <h3 className={styles.title}>{product.name}</h3>

              <p className={styles.meta}>
                {product.vendor || "Hindustan AgriCulture Homo"}
              </p>

              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              <p className={styles.price}>₹{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section2;
