import styles from "./StatCard.module.css";
function StatCard() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cardsWrapper}>
          <div className={styles.card}>
            <h2 className={styles.value}>120</h2>
            <p className={styles.label}>Total Orders</p>
          </div>

          <div className={styles.card}>
            <h2 className={styles.value}>58</h2>
            <p className={styles.label}>Total Users</p>
          </div>

          <div className={styles.card}>
            <h2 className={styles.value}>34</h2>
            <p className={styles.label}>Total Products</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default StatCard;
