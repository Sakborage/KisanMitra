import { useState } from "react";
import styles from "./ItemCard.module.css";
import UpdateProductForm from "./UpdateProductForm";

function ItemCard({ product }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={product.img_url} alt={product.name} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.category}>{product.category}</p>

        <p className={styles.description}>{product.description}</p>

        <div className={styles.meta}>
          <span>₹ {product.price}</span>
          <span>Stock: {product.stock}</span>
          <span>{product.weight} g</span>
        </div>

        <div className={styles.vendorStatus}>
          <span className={styles.vendor}>{product.vendor}</span>
          <span
            className={`${styles.status} ${
              product.status === "ACTIVE" ? styles.active : styles.inactive
            }`}
          >
            {product.status}
          </span>
        </div>

        <div className={styles.section}>
          <h4>Product Details</h4>
          <ul>
            {product.productDetails.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h4>Cautions</h4>
          <ul>
            {product.cautions.map((caution, index) => (
              <li key={index}>{caution}</li>
            ))}
          </ul>
        </div>

        <div className={styles.actions}>
          <button className={styles.update} onClick={() => setOpen(true)}>
            Update
          </button>
          <button className={styles.delete}>Delete</button>
        </div>
      </div>
      {open && (
        <UpdateProductForm product={product} onClose={() => setOpen(false)} />
      )}
    </div>
  );
}

export default ItemCard;
