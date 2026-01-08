import ItemCard from "./ItemCard";
import styles from "./ItemList.module.css";

function ItemList({ data }) {
  return (
    <div className={styles.grid}>
      {data.map((product) => (
        <ItemCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemList;
