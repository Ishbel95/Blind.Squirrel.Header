"use client";
import CountContext from "@components/context/CountContext";
import styles from "@components/styles/Home.module.scss";
import { useContext, useEffect } from "react";
export default function LoadingContainer() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div
      className={`${styles.homeHeroLoadingContainer} ${
        count === 100 && styles.homeHeroLoadingContainerMove
      }`}
    >
      <div className={styles.homeHeroLoad}>
        <p>{count}%</p>
      </div>
    </div>
  );
}
