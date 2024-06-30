import React, { createContext } from "react";

const CountContext = createContext({
  count: null,
  setCount: () => {},
});

export default CountContext;
