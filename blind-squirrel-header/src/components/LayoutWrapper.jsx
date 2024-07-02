"use client";
import React, { useState } from "react";
import CountContext from "@components/context/CountContext";
export default function LayoutWrapper({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}
