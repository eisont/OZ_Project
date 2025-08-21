import { useEffect, useRef, useState } from 'react';
import { formatTime } from '../../utils/formatTime';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  padding: 30px 0;
  width: 300px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Time = styled.div`
  font-size: 30px;
  font-weight: 600;

  color: ${(pr) => (pr.isOn ? '#000' : '#aeaeae')};
`;

const Bt = styled.button`
  padding: 5px 10px;
  border-radius: 10px;
  background: ${(pr) => (pr.isOn ? '#ff4a4a' : '#c1ff9d')};

  color: ${(pr) => (pr.isOn ? '#fff' : '#000')};
  font-weight: 600;

  :hover {
    cursor: pointer;
    background: ${(pr) => (pr.isOn ? '#f00' : '#00c52b')};
  }
`;

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
    <Wrapper>
      <Time isOn={isOn}>{formatTime(stoWatchtime)}</Time>
      <Bt onClick={() => setIsOn((prev) => !prev)} isOn={isOn}>
        {isOn ? 'Off' : 'On'}
      </Bt>
      <Bt
        onClick={() => {
          setStopWatchTime(0);
          setIsOn(false);
        }}
      >
        reset
      </Bt>
    </Wrapper>
  );
};

export default StopWatch;
