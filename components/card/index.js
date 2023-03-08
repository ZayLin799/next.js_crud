import React from "react";
import styles from "./index.module.css";

export default function Card(props) {
  var article = props.data;
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{article.title}</h2>
      <p className={styles.desc}>{article.description}</p>
      <button className={styles.cta}>Read More</button>
    </div>
  );
}
