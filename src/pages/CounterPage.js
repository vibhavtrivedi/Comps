import { useState, useEffect } from "react";
import Button from "../components/Button";
import UseCounter from "../hooks/use-counter";
function CounterPage({ initialValue }) {
  const { count, increament } = UseCounter(initialValue);
  return (
    <div>
      <h1>Count is : {count}</h1>
      <Button onClick={increament}>Increament</Button>
    </div>
  );
}

export default CounterPage;
