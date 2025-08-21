import { useEffect, useRef, useState } from 'react';
import { Bt } from '../../ui/Common.styled';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  padding: 10px;

  border: ${(pr) => (pr.toggle ? '3px solid green' : '5px solid red')};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BtBox = styled.div`
  width: 110px;
  display: flex;
  justify-content: space-between;
`;
const TextBox = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

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
    <Wrapper toggle={toggle}>
      {toggle ? <TextBox style={{ color: 'green' }}>{time}</TextBox> : <TextBox style={{ color: 'red' }}>{time}</TextBox>}
      <BtBox>
        <Bt style={{ background: 'green', color: 'white' }} onClick={startBt}>
          start
        </Bt>
        <Bt style={{ background: 'red', color: 'white' }} onClick={stopBt}>
          stop
        </Bt>
      </BtBox>
    </Wrapper>
  );
};

export default Clock2;
