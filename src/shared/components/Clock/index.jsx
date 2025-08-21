import { useEffect, useState } from 'react';

// toLocaleTimeString()을 사용
const Clock = () => {
  const [clocktime, setClockTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setClockTime(new Date());
    }, 1000);
  }, []);

  return <div style={{ padding: '10px', fontSize: '20px' }}>{clocktime.toLocaleTimeString()}</div>;
};

export default Clock;
