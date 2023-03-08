import React, { useEffect, useState } from "react";
import Card from "@/components/card";
import styles from "./../styles/Home.module.css";
import axios from "axios";

function Home() {
  const [article, setArticle] = useState("");
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    let res = await axios.get("http://localhost:3005/api/article");
    setArticle(res.data);
  };

  return (
    <section className={styles.Home}>
      <h1 className={styles.header}>Articles</h1>
      <div className={styles.cards}>
        {article && article.map((item) => <Card key={item.id} data={item} />)}
      </div>
    </section>
  );
}

export default Home;
