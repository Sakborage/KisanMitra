import styles from "./OrderItemCard.module.css";

function OrderItemCard({ item, status }) {
  return (
    <div className={styles.card}>
      <img src={item.product.img_url} alt={item.product.name} />

      <div className={styles.info}>
        <h4>{item.product.name}</h4>
        <p>Qty: {item.quantity}</p>
        <p className={styles.price}>₹{item.priceAtpurchase}</p>
      </div>

      <div className={styles.status}>
        {status === "DELIVERED" ? "Delivered" : "In Transit"}
      </div>
    </div>
  );
}

export default OrderItemCard;
