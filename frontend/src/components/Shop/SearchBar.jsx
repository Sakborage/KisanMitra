import styles from "./SearchBar.module.css";

function SearchBar({ query, setQuery }) {
  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        className={styles.searchInput}
        placeholder="Search for products..."
      />
    </div>
  );
}

export default SearchBar;
