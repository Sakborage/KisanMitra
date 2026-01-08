import styles from "./BillSummary.module.css";

function BillSummary({ items, onPlaceOrder, disabled }) {
  const itemsTotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const HANDLING_CHARGE = 20;
  const DELIVERY_CHARGE = 40;
  const FREE_DELIVERY_LIMIT = 150;

  const isFreeDelivery = itemsTotal >= FREE_DELIVERY_LIMIT;
  const deliveryCharge = isFreeDelivery ? 0 : DELIVERY_CHARGE;

  const total =
    itemsTotal > 0 ? itemsTotal + HANDLING_CHARGE + deliveryCharge : 0;

  return (
    <div className={styles.bill}>
      <h4>Bill details</h4>

      <div className={styles.row}>
        <span>Items total</span>
        <span>₹{itemsTotal}</span>
      </div>

      <div className={styles.row}>
        <span>Delivery charge</span>
        <span className={isFreeDelivery ? styles.free : ""}>
          {isFreeDelivery ? "FREE" : `₹${deliveryCharge}`}
        </span>
      </div>

      <div className={styles.row}>
        <span>Handling charge</span>
        <span>₹{HANDLING_CHARGE}</span>
      </div>

      <hr className={styles.divider} />

      <div className={styles.total}>
        <span>₹{total}</span>
        <button onClick={onPlaceOrder} disabled={disabled}>
          Place Order
        </button>
      </div>
    </div>
  );
}

export default BillSummary;
