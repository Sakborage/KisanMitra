import styles from "./TopSellingProduct.module.css";

function TopSellingProducts() {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Top Selling Products</h3>

      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.rank}>1</span>
          <span className={styles.product}>Tomato Seeds</span>
          <span className={styles.count}>120 sold</span>
        </li>

        <li className={styles.item}>
          <span className={styles.rank}>2</span>
          <span className={styles.product}>Urea Fertilizer</span>
          <span className={styles.count}>95 sold</span>
        </li>

        <li className={styles.item}>
          <span className={styles.rank}>3</span>
          <span className={styles.product}>Wheat Seeds</span>
          <span className={styles.count}>78 sold</span>
        </li>

        <li className={styles.item}>
          <span className={styles.rank}>4</span>
          <span className={styles.product}>Organic Pesticide</span>
          <span className={styles.count}>62 sold</span>
        </li>

        <li className={styles.item}>
          <span className={styles.rank}>5</span>
          <span className={styles.product}>Drip Irrigation Kit</span>
          <span className={styles.count}>49 sold</span>
        </li>
      </ul>
    </div>
  );
}

export default TopSellingProducts;
