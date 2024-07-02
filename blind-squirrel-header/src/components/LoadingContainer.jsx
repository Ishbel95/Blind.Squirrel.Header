"use client";
import CountContext from "@components/context/CountContext";
import {
  homeHeroLoadingContainer,
  homeHeroLoadingContainerMove,
  homeHeroLoad,
} from "@components/styles/Home.module.scss";
import { useContext, useEffect } from "react";
export default function LoadingContainer() {
  const { count, setCount } = useContext(CountContext);

  useEffect(() => {
    count < 100 &&
      setTimeout(() => {
        setCount(count + 1);
      }, 40);
  }, [count]);

  return (
    <div
      className={`${homeHeroLoadingContainer} ${
        count === 100 && homeHeroLoadingContainerMove
      }`}
    >
      <div className={homeHeroLoad}>
        <p>{count}%</p>
      </div>
    </div>
  );
}
