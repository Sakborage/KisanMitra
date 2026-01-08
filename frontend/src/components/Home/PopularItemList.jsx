import React from "react";
import styles from "./PopularItemList.module.css";
import PopularItem from "./PopularItem";

export default function PopularItemList() {
  const products = [
    {
      id: 1,
      name: "Granular Potash",
      description: "High-quality potash fertilizer for soil enrichment.",
      vendor: "OmniFert",
      rating: 5,
      image: "/images/tomato.jpg",
    },
    {
      id: 2,
      name: "NPK 15-15-15",
      description: "Balanced fertilizer for all crops.",
      vendor: "AgroWorld",
      rating: 4,
      image: "/images/tomato.jpg",
    },
    {
      id: 3,
      name: "Granular Potash",
      description: "Soil boosting fertilizer.",
      vendor: "FarmPlus",
      rating: 3,
      image: "/images/tomato.jpg",
    },
    {
      id: 4,
      name: "NPK 15-15-15",
      description: "Perfect for vegetable crops.",
      vendor: "GreenLeaf",
      rating: 2,
      image: "/images/tomato.jpg",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.flexGrid}>
        {products.map((product) => (
          <PopularItem key={product.id} product={product} />
        ))}
        <button>Browse Store </button>
      </div>
    </section>
  );
}
