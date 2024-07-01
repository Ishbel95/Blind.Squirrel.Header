"use client";
import HomeHero from "@components/components/HomeHero";
import React, { useState, useEffect, useContext } from "react";
import LoadingContainer from "@components/components/LoadingContainer";
import CountContext from "@components/context/CountContext";
export default function Home() {
  const [showHero, setShowHero] = useState();
  const { count, setCount } = useContext(CountContext);
  useEffect(() => {
    count < 100 &&
      setTimeout(() => {
        setCount(count + 1);
      }, 40);
    count === 100 &&
      setTimeout(() => {
        setShowHero(true);
      }, 700);
  }, [count]);

  return (
    <>
      <LoadingContainer count={count} />
      {showHero && <HomeHero />}
    </>
  );
}
