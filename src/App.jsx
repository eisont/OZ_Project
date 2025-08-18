import './App.css';
import TodoInput from './components/todoInput/TodoInput';
import TodoList from './components/todolist/TodoList';
import { useEffect, useRef, useState } from 'react';

// 프로젝트 최소 요구 사항
// Custom Hook을 만들고 사용해 보세요.

const App = () => {
  const [famousSaying, setFamousSaying] = useState({ author: '', message: '' });
  const [todoList, setTodoList] = useState([]);
  const [time, setTime] = useState('');

  // 데이터 받아오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/todo');
        const json = await res.json();
        setTodoList(json);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  // 랜덤 명언 받아오기!
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://korean-advice-open-api.vercel.app/api/advice');
        const json = await res.json();
        setFamousSaying({ author: json.author, message: json.message });
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const currentTime = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const hour = today.getHours();
    const minuite = today.getMinutes();
    const second = today.getSeconds();
    setTime(`${year} ${month}/${day} ${hour}:${minuite}:${second}`);
  };

  const intervalRef = useRef();
  useEffect(() => {
    currentTime();

    intervalRef.current = setInterval(currentTime, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const startBt = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(currentTime, 1000);
    }
  };
  const stopBt = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div className='wrapper'>
      <button onClick={startBt}>start</button>
      <button onClick={stopBt}>stop</button>
      <h1>{time}</h1>
      <h3>
        {famousSaying.message} <div style={{ fontSize: '16px' }}>- {famousSaying.author}</div>
      </h3>
      <TodoInput setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default App;
