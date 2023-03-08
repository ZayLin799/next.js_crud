import React, { useEffect } from "react";
import styles from "./../styles/404.module.css";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <section className={styles.container}>
      <div>
        <h1>Page Not Found!</h1>
        <button className={styles.btn} onClick={() => router.push("/")}>
          Back to home
        </button>
      </div>
    </section>
  );
}
