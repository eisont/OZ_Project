import { useLocation } from 'react-router-dom';
import { CommonWrapper } from '../../shared/ui/button.styled';
import Header from './header';
import TodoListPage from '../../../pages/TodoListPage';
import App from '../App';
import TimerStopWatchCurrentTimePage from '../../../pages/TimerStopWatchCurrentTimePage';
import WeatherProject from '../../../pages/WeatherProject';
import TailwindCssPage from '../../../pages/TailwindCssPage';
import styled from '@emotion/styled';

const Wrapper = styled(CommonWrapper)`
  height: 100vh;
  justify-content: space-around;
`;
const MainBox = styled.div`
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: start;
  text-align: center;
`;

const Layout = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Wrapper>
      <Header />
      <MainBox>
        {pathname === '/' && <App />}
        {pathname === '/Todo_List' && <TodoListPage />}
        {pathname === '/Timer_StopWatch_CurrentTime' && <TimerStopWatchCurrentTimePage />}
        {pathname === '/Weather_Project' && <WeatherProject />}
        {pathname === '/TailwindCss_Project' && <TailwindCssPage />}
      </MainBox>
    </Wrapper>
  );
};

export default Layout;
