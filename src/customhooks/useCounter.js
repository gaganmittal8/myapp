import { useState } from "react";

export const useCounter = (initialValue, type) => {
  const [count, setCount] = useState(initialValue, type);
  const counter = (type) => {
    if (type === "incre") {
        setCount(count + 1);
    } else if (type === "decre" && count != 0 ) {
        setCount(count - 1);
    } else {
        setCount(count);
    }
  };
  return [counter, count];
};