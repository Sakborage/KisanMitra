import styles from "./OrderItems.module.css";

function OrderItems({ items }) {
  return (
    <div className={styles.card}>
      <h3>Order Items</h3>

      {items.map((item) => (
        <div key={item.id} className={styles.item}>
          <img src={item.product.img_url} />
          <div>
            <p className={styles.name}>{item.product.name}</p>
            <p>Qty: {item.quantity}</p>
            <p>₹{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderItems;
