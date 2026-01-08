import styles from "./PromoCard.module.css";

function PromoCard({ title, description, buttonText, image, bgColor }) {
  return (
    <div className={styles.card} style={{ backgroundColor: bgColor }}>
      <div className={styles.left}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.desc}>{description}</p>
        <button className={styles.btn}>{buttonText}</button>
      </div>

      <div className={styles.right}>
        <img src={image} alt="promo" className={styles.image} />
      </div>
    </div>
  );
}

export default PromoCard;
