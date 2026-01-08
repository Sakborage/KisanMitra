import styles from "./Navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>KisanMitra</div>

      <ul className={styles.navLinks}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="shop">Product</a>
        </li>
        <li>
          <a href="#">Predict</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Articles</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>

      <div className={styles.cart}>
        <a href="/cart">
          <FaShoppingCart />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
