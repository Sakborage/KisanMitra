import React from "react";
import styles from "./Section1.module.css";
import heroImg from "../../assets/images/background.png"; // or .jpg/.png

export default function Hero() {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImg})` }}
      aria-label="Fertilizers for the future hero"
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>We Are Here To Connect with Farmer and the End User....</h1>
          <p>Soils Testing, Crop Cultivation, Agricultural Progress</p>
          <div className={styles.buttons}></div>
        </div>
      </div>
    </section>
  );
}
