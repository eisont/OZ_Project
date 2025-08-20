import { useLocation } from 'react-router-dom';
import Header from './header';
import TodoListPage from '../../../pages/TodoListPage';
import App from '../App';
import TimerStopWatchCurrentTimePage from '../../../pages/TimerStopWatchCurrentTimePage';
import WeatherProject from '../../../pages/WeatherProject';

const Layout = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <Header />
      {pathname === '/' && <App />}
      {pathname === '/Todo_List' && <TodoListPage />}
      {pathname === '/Timer_StopWatch_CurrentTime' && <TimerStopWatchCurrentTimePage />}
      {pathname === '/Weather_Project' && <WeatherProject />}
    </>
  );
};

export default Layout;
