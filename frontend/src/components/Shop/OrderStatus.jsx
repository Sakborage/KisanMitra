import styles from "./OrderStatus.module.css";

function OrderStatus({ status }) {
  return (
    <div className={styles.card}>
      <h3>Order Status</h3>
      <span className={`${styles.status} ${styles[status]}`}>{status}</span>
    </div>
  );
}

export default OrderStatus;
