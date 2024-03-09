import { useEffect, useState } from "react";
function UseCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const increament = () => {
    setCount(count + 1);
  };

  return { count, increament };
}

export default UseCounter;
