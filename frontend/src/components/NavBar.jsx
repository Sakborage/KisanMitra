import { useState } from "react";
import { useCart } from "./CartContext";
import styles from "./Navbar.module.css";
import { FaShoppingCart, FaUserCircle, FaBars } from "react-icons/fa";

function Navbar() {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>KisanMitra</div>

      {/* Hamburger (mobile only) */}
      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>

      {/* Nav Links */}
      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        <li>
          <a href="/home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="/shop" onClick={() => setMenuOpen(false)}>
            Product
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setMenuOpen(false)}>
            Predict
          </a>
        </li>
        <li>
          <a href="/order" onClick={() => setMenuOpen(false)}>
            Orders
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setMenuOpen(false)}>
            About Us
          </a>
        </li>
      </ul>

      {/* Right actions */}
      <div className={styles.actions}>
        <a href="/cart" className={styles.cartIcon}>
          <FaShoppingCart />
          {cartCount > 0 && (
            <span className={styles.cartCount}>{cartCount}</span>
          )}
        </a>

        <a href="/profile" className={styles.profileIcon}>
          <FaUserCircle />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
