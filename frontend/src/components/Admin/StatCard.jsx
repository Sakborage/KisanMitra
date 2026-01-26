import styles from "./StatCard.module.css";
function StatCard({ totalOrders, totalUsers, totalProducts }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cardsWrapper}>
          <div className={styles.card}>
            <h2 className={styles.value}>{totalOrders}</h2>
            <p className={styles.label}>Total Orders</p>
          </div>

          <div className={styles.card}>
            <h2 className={styles.value}>{totalUsers}</h2>
            <p className={styles.label}>Total Users</p>
          </div>

          <div className={styles.card}>
            <h2 className={styles.value}>{totalProducts}</h2>
            <p className={styles.label}>Total Products</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default StatCard;
