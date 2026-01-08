import styles from "./AddressCard.module.css";

function AddressCard({ address, selected, onSelect }) {
  return (
    <label className={`${styles.card} ${selected ? styles.selected : ""}`}>
      <input
        type="radio"
        name="address"
        checked={selected}
        onChange={() => onSelect(address)}
      />

      <div className={styles.content}>
        <p className={styles.name}>{address.fullName}</p>
        <p>{address.addressLine1}</p>
        <p>
          {address.city}, {address.state} - {address.pincode}
        </p>
        <p className={styles.phone}>📞 {address.phone}</p>
      </div>
    </label>
  );
}

export default AddressCard;
