import { useEffect, useState } from 'react';

const useTick = (initialTime: number, interval: number = 1000) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const lastTime = Date.now();
    const timeout = setTimeout(() => {
      setTime(time + Date.now() - lastTime);
    }, interval);

    return () => {
      clearTimeout(timeout);
    };
  }, [time, interval]);

  return time;
};

export default useTick;
