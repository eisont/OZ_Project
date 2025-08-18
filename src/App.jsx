import './App.css';
import TodoInput from './components/todoInput/TodoInput';
import TodoList from './components/todolist/TodoList';

// 프로젝트 최소 요구 사항
// Custom Hook을 만들고 사용해 보세요.

const App = (pr) => {
  const startBt = () => {
    if (!pr.intervalRef.current) {
      pr.intervalRef.current = setInterval(pr.currentTime, 1000);
    }
  };
  const stopBt = () => {
    if (pr.intervalRef.current) {
      clearInterval(pr.intervalRef.current);
      pr.intervalRef.current = null;
    }
  };

  return (
    <div className='wrapper'>
      <div>
        <button onClick={startBt}>start</button>
        <button onClick={stopBt}>stop</button>
      </div>
      <h1>{pr.time}</h1>
      <h3>
        {pr.famousSaying.message} <div style={{ fontSize: '16px' }}>- {pr.famousSaying.author}</div>
      </h3>
      <TodoInput setTodoList={pr.setTodoList} />
      <TodoList todoList={pr.todoList} setTodoList={pr.setTodoList} />
    </div>
  );
};

export default App;
