import styles from "./CategoryBar.module.css";

function CategoryBar({ category, setCategory }) {
  const categories = [
    { id: "seed", label: "Seeds" },
    { id: "fertilizer", label: "Fertilizers" },
    { id: "equipment", label: "Equipment" },
  ];

  return (
    <div className={styles.container}>
      {categories.map((c) => (
        <button
          key={c.id}
          className={`${styles.card} ${category === c.id ? styles.active : ""}`}
          onClick={() => setCategory(c.id)}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}

export default CategoryBar;
