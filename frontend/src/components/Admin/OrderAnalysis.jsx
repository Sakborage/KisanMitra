import OrderBarChart from "./OrdersBarChart";
import TopSellingProducts from "./TopSellingProducts";
import styles from "./OrderAnalysis.module.css";

function OrderAnalysis({ ordersByCategory, topSellingProducts }) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <OrderBarChart ordersByCategory={ordersByCategory} />
      </div>

      <div className={styles.right}>
        <TopSellingProducts topSellingProducts={topSellingProducts} />
      </div>
    </div>
  );
}

export default OrderAnalysis;
