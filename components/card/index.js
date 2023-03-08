import React from "react";
import styles from "./index.module.css";

export default function Card() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>A very trending news</h2>
      <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste eligendi quos optio officia laudantium sapiente inventore odio saepe aliquid adipisci, veritatis tempora quaerat! Numquam dolorem illum ex, culpa amet veniam.</p>
      <button className={styles.cta}>Read More</button>
    </div>
  );
}
 