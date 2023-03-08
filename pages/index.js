import React from "react";
import Card from "@/components/card";
import styles from "./../styles/Home.module.css";

function Home() {
  return (
    <section className={styles.Home}>
      <h1 className={styles.header}>Articles</h1>
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default Home;
