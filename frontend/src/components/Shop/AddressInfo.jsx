import styles from "./AddressInfo.module.css";

function AddressInfo({ address }) {
  return (
    <div className={styles.card}>
      <h3>Delivery Address</h3>
      <p>{address.fullName}</p>
      <p>{address.addressLine1}</p>
      <p>{address.addressLine2}</p>
      <p>{address.city}</p>
    </div>
  );
}

export default AddressInfo;
