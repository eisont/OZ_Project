import { useEffect, useRef, useState } from 'react';
import { formatTime } from '../../utils/formatTime';

// 스탑워치
const StopWatch = () => {
  const [stoWatchtime, setStopWatchTime] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isOn === true) {
      const timerId = setInterval(() => {
        setStopWatchTime((prev) => prev + 1);
      }, 1000);
      timerRef.current = timerId;
    } else {
      clearInterval(timerRef.current);
    }
  }, [isOn]);

  return (
    <div>
      {formatTime(stoWatchtime)}
      <button onClick={() => setIsOn((prev) => !prev)}>{isOn ? 'Off' : 'On'}</button>
      <button
        onClick={() => {
          setStopWatchTime(0);
          setIsOn(false);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default StopWatch;
