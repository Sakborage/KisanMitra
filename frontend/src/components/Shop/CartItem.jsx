import styles from "./CartItem.module.css";

function CartItem({ item, onIncrease, onDecrease }) {
  return (
    <div className={styles.item}>
      <img src={item.image} alt={item.name} className={styles.image} />

      <div className={styles.info}>
        <h4>{item.name}</h4>
        <p className={styles.price}>₹{item.price}</p>
      </div>

      <div className={styles.counter}>
        <button
          onClick={() => {
            console.log("DECREASE CLICKED");
            console.log(item.cartItemId);
            onDecrease(item.cartItemId, item.quantity);
          }}
        >
          -
        </button>

        <span>{item.quantity}</span>

        <button onClick={() => onIncrease(item.cartItemId, item.quantity)}>
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;
