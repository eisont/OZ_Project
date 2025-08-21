import { useEffect, useRef, useState } from 'react';
import { formatTime } from '../../utils/formatTime';
import * as S from './Timer.styled';

// timer
const Timer = () => {
  const [startTime, setStartTime] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isOn && time > 0) {
      const timerId = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
      timerRef.current = timerId;
    } else if (!isOn || time == 0) {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isOn, time]);

  return (
    <S.Wrapper isOn={isOn}>
      <S.Time startTime={startTime} isOn={isOn}>
        {time ? formatTime(time) : formatTime(startTime)}
      </S.Time>
      <S.BtBox>
        <S.Bt
          style={{ background: 'green' }}
          onClick={() => {
            setIsOn(true);
            setTime(time ? time : startTime);
            setStartTime(0);
          }}
        >
          시작
        </S.Bt>
        <S.Bt style={{ background: 'red' }} onClick={() => setIsOn(false)}>
          멈춤
        </S.Bt>
        <S.Bt
          style={{ background: 'yellow' }}
          onClick={() => {
            setTime(0);
            setIsOn(false);
          }}
        >
          리셋
        </S.Bt>
      </S.BtBox>
      <input type='range' max='3600' min='0' step='30' value={startTime} onChange={(e) => setStartTime(e.target.value)} />
    </S.Wrapper>
  );
};

export default Timer;
