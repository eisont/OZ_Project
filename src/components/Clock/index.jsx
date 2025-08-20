import { useEffect, useState } from 'react';

// toLocaleTimeString()을 사용
const Clock = () => {
  const [clocktime, setClockTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setClockTime(new Date());
    }, 1000);
  }, []);

  return <>{clocktime.toLocaleTimeString()}</>;
};

export default Clock;
