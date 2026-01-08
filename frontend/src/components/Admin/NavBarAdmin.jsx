import styles from "./NavBar.module.css";

function NavBarAdmin() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>KisanMitra</div>

      <ul className={styles.navLinks}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/product">Product</a>
        </li>
        <li>
          <a href="#">Orders</a>
        </li>
        <li>
          <a href="#">Users</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBarAdmin;
