import { useLocation } from "react-router-dom";
import styles from "./OrderSummary.module.css";

function OrderSummary() {
  const { state } = useLocation();
  const bill = state.bill;
  return (
    <div className={styles.summary}>
      <h3>Order Summary</h3>

      <div className={styles.row}>
        <span>Items total</span>
        <span>₹{bill.itemsTotal}</span>
      </div>

      <div className={styles.row}>
        <span>Delivery</span>
        <span className={bill.deliveryCharge === 0 ? styles.free : ""} />
      </div>

      <div className={styles.row}>
        <span>Handling</span>
        <span>₹{bill.handlingCharge}</span>
      </div>

      <div className={styles.total}>
        <span>Total</span>
        <span>₹{bill.total}</span>
      </div>

      <button className={styles.placeOrder}>Place Order</button>
    </div>
  );
}

export default OrderSummary;
