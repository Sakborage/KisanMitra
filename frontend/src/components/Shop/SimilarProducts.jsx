import React from "react";

import styles from "./SimilarProducts.module.css";
import ItemCard from "./ItemCard";

const SimilarProducts = ({ products }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Similar Products</h3>

      <div className={styles.row}>
        {products.map((item, index) => (
          <ItemCard
            key={index}
            id={item.id}
            img={item.img_url}
            name={item.name}
            weight={item.weight}
            price={item.price}
            vendor={item.vendor}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
