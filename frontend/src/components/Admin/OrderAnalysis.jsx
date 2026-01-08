import OrderBarChart from "./OrdersBarChart";
import TopSellingProducts from "./TopSellingProducts";
import styles from "./OrderAnalysis.module.css";

function OrderAnalysis() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <OrderBarChart />
      </div>

      <div className={styles.right}>
        <TopSellingProducts />
      </div>
    </div>
  );
}

export default OrderAnalysis;
