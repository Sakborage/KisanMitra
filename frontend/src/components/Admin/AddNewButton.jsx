import { useNavigate } from "react-router-dom";
import styles from "./AddNewButton.module.css";

function AddNewButton() {
  const navigate = useNavigate();

  return (
    <button className={styles.addButton} onClick={() => navigate("new")}>
      + Add New Product
    </button>
  );
}

export default AddNewButton;
