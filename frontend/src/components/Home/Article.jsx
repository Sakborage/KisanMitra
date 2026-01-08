import React from "react";
import styles from "./Article.module.css";

function Article({ article }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageBox}>
        <img src={article.image} alt={article.title} />
      </div>

      <div className={styles.content}>
        <p className={styles.category}>Articles</p>

        <h3 className={styles.title}>{article.title}</h3>

        <p className={styles.excerpt}>{article.excerpt}</p>

        <div className={styles.footer}>
          <span className={styles.date}>{article.date}</span>
        </div>
      </div>
    </div>
  );
}

export default Article;
