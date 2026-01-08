import React from "react";
import styles from "./Footer.module.css";

export default function FooterColumn2() {
  return (
    <div className={styles.col}>
      <h3 className={styles.heading}>Quick Links</h3>
      <ul className={styles.links}>
        <li>About Us</li>
        <li>Products</li>
        <li>Press Releases</li>
        <li>Media</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
