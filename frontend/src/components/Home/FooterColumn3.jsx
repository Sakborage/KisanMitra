import React from "react";
import styles from "./Footer.module.css";

export default function FooterColumn3() {
  const posts = [
    {
      id: 1,
      title: "Press Statement",
      date: "23 Sep 2023",
      image: "src/assets/images/art1.png",
    },
    {
      id: 2,
      title: "Farmers Day Release",
      date: "23 Sep 2023",
      image: "src/assets/images/article2.png",
    },
    {
      id: 3,
      title: "Agriculture & Government",
      date: "22 Sep 2023",
      image: "src/assets/images/article3.png",
    },
  ];

  return (
    <div className={styles.col}>
      <h3 className={styles.heading}>Latest Posts</h3>

      {posts.map((p) => (
        <div className={styles.post} key={p.id}>
          <img src={p.image} alt="" />

          <div>
            <p className={styles.postTitle}>{p.title}</p>
            <span className={styles.date}>{p.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
