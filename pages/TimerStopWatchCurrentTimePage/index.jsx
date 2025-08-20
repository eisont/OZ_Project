import Clock from '../../src/shared/components/Clock';
import Clock2 from '../../src/shared/components/Clock2';
import StopWatch from '../../src/shared/components/StopWatch';
import Timer from '../../src/shared/components/Timer';

const TimerStopWatchCurrentTimePage = () => {
  return (
    <div className='wrapper'>
      <Clock />
      <Clock2 />
      <StopWatch />
      <Timer />
    </div>
  );
};

export default TimerStopWatchCurrentTimePage;
