import styles from "./OrderSummary.module.css";

function OrderSummary({ order }) {
  const total = order.totalAmount;

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h4>Customer</h4>
        <p>{order.user.username}</p>
        <p>{order.address.phone}</p>
      </div>

      <div className={styles.card}>
        <h4>Address</h4>
        <p>{order.address.addressLine1}</p>
        <p>
          {order.address.addressLine2}, {order.address.city}
        </p>
        <p>
          {order.address.state} - {order.address.pincode}
        </p>
      </div>

      <div className={styles.card}>
        <h4>Payment</h4>
        <p>Method: {order.payment.paymentMethod}</p>
        <p>Status: {order.payment.status}</p>

        <hr />

        <p className={styles.total}>Total: ₹{total}</p>
      </div>
    </div>
  );
}

export default OrderSummary;
