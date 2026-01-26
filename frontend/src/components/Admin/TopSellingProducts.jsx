import styles from "./TopSellingProduct.module.css";

function TopSellingProducts({ topSellingProducts = [] }) {
  console.log(topSellingProducts);
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Top Selling Products</h3>

      <ul className={styles.list}>
        {topSellingProducts.length === 0 ? (
          <p>No data available</p>
        ) : (
          topSellingProducts.map((item, index) => (
            <li className={styles.item} key={item.productId}>
              <span className={styles.rank}>{index + 1}</span>
              <span className={styles.product}>{item.name}</span>
              <span className={styles.count}>{item.soldQuantity} sold</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TopSellingProducts;
