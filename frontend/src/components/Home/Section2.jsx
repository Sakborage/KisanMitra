import React from "react";
import styles from "./Section2.module.css";
import PopularItemList from "./PopularItemList";

export default function Section2() {
  return (
    <section className={styles.section}>
      <p className={styles.subTitle}>Popular Choices</p>
      <h2 className={styles.mainTitle}>Popular Products</h2>
      <PopularItemList />
    </section>
  );
}
