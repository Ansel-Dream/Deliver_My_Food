import { useState, useEffect } from "react";

const useCountdown = (initialCount = 30) => {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const start = (newCount = initialCount) => {
    setCount(newCount);
    setIsActive(true);
  };

  useEffect(() => {
    if (!isActive || count <= 0) {
      setIsActive(false);
      return;
    }

    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, isActive]);

  return { count, start };
};

export default useCountdown;
