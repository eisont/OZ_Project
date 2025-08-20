import { useEffect, useRef, useState } from 'react';

const Clock2 = () => {
  const [toggle, setToggle] = useState(true);
  const [time, setTime] = useState('');

  useEffect(() => {
    currentTime();

    intervalRef.current = setInterval(currentTime, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const currentTime = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = String(today.getDate()).padStart(2, '0');
    const hour = String(today.getHours()).padStart(2, '0');
    const minuite = String(today.getMinutes()).padStart(2, '0');
    const second = String(today.getSeconds()).padStart(2, '0');
    setTime(`${year} ${month}/${day} ${hour}:${minuite}:${second}`);
  };

  const intervalRef = useRef();

  const startBt = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(currentTime, 1000);
      setToggle(true);
    }
  };
  const stopBt = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setToggle(false);
    }
  };

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {toggle ? <h2 style={{ color: 'green' }}>{time}</h2> : <h2 style={{ color: 'red' }}>{time}</h2>}
        <button style={{ background: 'green', color: 'white' }} className='Bt' onClick={startBt}>
          start
        </button>
        <button style={{ background: 'red', color: 'white' }} className='Bt' onClick={stopBt}>
          stop
        </button>
      </div>
    </>
  );
};

export default Clock2;
