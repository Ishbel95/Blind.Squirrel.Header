"use client";
import CountContext from "@components/context/CountContext";
import {
  homeHeroLoadingContainer,
  homeHeroLoadingContainerMove,
  homeHeroLoad,
} from "@components/styles/Home.module.scss";
import { useContext } from "react";
export default function LoadingContainer() {
  const { count } = useContext(CountContext);

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
