import { useState } from "react";
import styles from "./NavBar.module.css";

function NavBarAdmin() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>KisanMitra</div>

      {/* Hamburger (mobile only) */}
      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Nav Links */}
      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        <li>
          <a href="/admin" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="/admin/product" onClick={() => setMenuOpen(false)}>
            Product
          </a>
        </li>
        <li>
          <a href="/admin/order" onClick={() => setMenuOpen(false)}>
            Orders
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setMenuOpen(false)}>
            Users
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBarAdmin;
