import styled from '@emotion/styled';
import Clock from '../../src/shared/components/Clock';
import Clock2 from '../../src/shared/components/Clock2';
import StopWatch from '../../src/shared/components/StopWatch';
import Timer from '../../src/shared/components/Timer';

const Wrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimerStopWatchCurrentTimePage = () => {
  return (
    <Wrapper>
      <Clock />
      <Clock2 />
      <StopWatch />
      <Timer />
    </Wrapper>
  );
};

export default TimerStopWatchCurrentTimePage;
