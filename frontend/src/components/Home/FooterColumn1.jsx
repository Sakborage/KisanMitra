import React from "react";
import styles from "./Footer.module.css";

export default function FooterColumn1() {
  return (
    <div className={styles.col}>
      <div className={styles.logo}>KisanMitra</div>

      <p className={styles.text}>
        KisanMitra is a platform focused on helping farmers connect with
        vendors, get quality products, and stay informed.
      </p>

      <h4 className={styles.follow}>Follow Us</h4>

      <div className={styles.socials}>
        <a href="#">Fb</a>
        <a href="#">In</a>
      </div>
    </div>
  );
}
