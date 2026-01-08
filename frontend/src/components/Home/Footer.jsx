import React from "react";
import styles from "./Footer.module.css";
import FooterColumn1 from "./FooterColumn1";
import FooterColumn2 from "./FooterColumn2";
import FooterColumn3 from "./FooterColumn3";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <FooterColumn1 />
        <FooterColumn2 />
        <FooterColumn3 />
      </div>
    </footer>
  );
}
