import { useState } from 'react';
import TodoInput from '../shared/components/todoInput/TodoInput';
import TodoList from '../shared/components/todolist/TodoList';
import './../App.css';

const App = (pr) => {
  const [toggle, setToggle] = useState(true);

  const startBt = () => {
    if (!pr.intervalRef.current) {
      pr.intervalRef.current = setInterval(pr.currentTime, 1000);
      setToggle(true);
    }
  };
  const stopBt = () => {
    if (pr.intervalRef.current) {
      clearInterval(pr.intervalRef.current);
      pr.intervalRef.current = null;
      setToggle(false);
    }
  };

  return (
    <div className='wrapper'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {toggle ? <h2 style={{ color: 'green' }}>{pr.time}</h2> : <h2 style={{ color: 'red' }}>{pr.time}</h2>}
        <button style={{ background: 'green', color: 'white' }} className='Bt' onClick={startBt}>
          start
        </button>
        <button style={{ background: 'red', color: 'white' }} className='Bt' onClick={stopBt}>
          stop
        </button>
      </div>
      <h3>
        {pr.famousSaying.message} <div style={{ fontSize: '16px' }}>- {pr.famousSaying.author}</div>
      </h3>
      <TodoInput setTodoList={pr.setTodoList} />
      <TodoList todoList={pr.todoList} setTodoList={pr.setTodoList} />
    </div>
  );
};

export default App;
