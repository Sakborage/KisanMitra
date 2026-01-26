import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Product.module.css";
import ItemCard from "./ItemCard";
import ItemList from "./ItemList";
import AddNewButton from "./AddNewButton";
import NavBarAdmin from "./NavBarAdmin";

function Product() {
  const [status, setStatus] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, [status]);

  const fetchProducts = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:8080/product?status=${status}`,
        { withCredentials: true },
      );

      setProducts(response.data);
      console.log(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBarAdmin />
      <div className={styles.container}>
        <div className={styles.toggleGroup}>
          <button
            className={status === "" ? styles.active : ""}
            onClick={() => setStatus("")}
          >
            All
          </button>

          <button
            className={status === "ACTIVE" ? styles.active : ""}
            onClick={() => setStatus("ACTIVE")}
          >
            Active
          </button>

          <button
            className={status === "INACTIVE" ? styles.active : ""}
            onClick={() => setStatus("INACTIVE")}
          >
            Inactive
          </button>

          <button
            className={status === "DELETED" ? styles.active : ""}
            onClick={() => setStatus("DELETED")}
          >
            Deleted
          </button>
        </div>
        <div className={styles.addButtonWrapper}>
          <AddNewButton />
        </div>

        <div className={styles.list}>
          {loading ? (
            <p className={styles.empty}>Loading...</p>
          ) : products.length === 0 ? (
            <p className={styles.empty}>No products found</p>
          ) : (
            <ItemList data={products} />
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
