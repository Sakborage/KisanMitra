// ArticleList.jsx
import React from "react";
import Article from "./Article";
import styles from "./ArticleList.module.css";

function ArticleList() {
  const articles = [
    {
      id: 1,
      title: "Connecting with farmers to improve livelihoods",
      excerpt:
        "Short summary about how to reach and help farmers with best practices.",
      date: "23 Sep 2023",
      comments: 0,
      image: "/images/article1.jpg",
    },
    {
      id: 2,
      title: "The Changing Effects of the Environment on Agriculture",
      excerpt: "An overview of recent environmental changes and crop impacts.",
      date: "23 Sep 2023",
      comments: 0,
      image: "/images/article2.jpg",
    },
    {
      id: 3,
      title: "Agriculture, Trade & Regulatory Standards in Ghana",
      excerpt: "How trade and rules shape farming outcomes in the region.",
      date: "23 Sep 2023",
      comments: 0,
      image: "/images/article3.jpg",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.subtitle}>Latest News & Blog</p>
        <h2 className={styles.title}>Popular Articles And Tips</h2>
      </div>

      <div className={styles.list}>
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}

export default ArticleList;
