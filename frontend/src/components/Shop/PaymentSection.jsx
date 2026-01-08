import styles from "./PaymentSection.module.css";

function PaymentSection({ onPaymentChange }) {
  return (
    <div className={styles.card}>
      <h4>Payment Method</h4>

      <label>
        <input
          type="radio"
          name="payment"
          value="COD"
          defaultChecked
          onChange={(e) => onPaymentChange(e.target.value)}
        />
        Cash on Delivery
      </label>

      <label>
        <input
          type="radio"
          name="payment"
          value="UPI"
          onChange={(e) => onPaymentChange(e.target.value)}
        />
        UPI
      </label>

      <label>
        <input
          type="radio"
          name="payment"
          value="CARD"
          onChange={(e) => onPaymentChange(e.target.value)}
        />
        Card
      </label>
    </div>
  );
}

export default PaymentSection;
