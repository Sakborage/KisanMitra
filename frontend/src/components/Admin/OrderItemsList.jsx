import OrderItemCard from "./OrderItemCard";
import styles from "./OrderItemsList.module.css";

function OrderItemsList({ items = [], status }) {
  return (
    <div className={styles.wrapper}>
      <h3>Order Items</h3>

      {items.map((item) => (
        <OrderItemCard key={item.id} item={item} status={status} />
      ))}
    </div>
  );
}

export default OrderItemsList;
