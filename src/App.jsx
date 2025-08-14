import './App.css';
import TodoInput from './components/todoInput/TodoInput';
import TodoList from './components/todolist/TodoList';
import { useEffect, useState } from 'react';

// 프로젝트 최소 요구 사항
// 1. Todo 생성 => 완료
//  조회 => 완료
// 수정 => 완료
// 삭제  => 완료
// 2. 현재 시간 표시,  타이머, 스톱워치 중 하나 이상의 기능을 구현하세요. == 완료
// 3. 랜덤 명언을 표시할 수 있는 컴포넌트를 만드세요.    == 완료
// 4. useState, ==> 완료
// useEffect, ==> 완료
// useRef ==> 완료
// >>>>> 다 했다면? <<<<<
// json-server를 사용해 Todo 정보를 파일로 저장해 보세요. === 완료
// Custom Hook을 만들고 사용해 보세요.

const App = () => {
  const [famousSaying, setFamousSaying] = useState({ author: '', message: '' });
  const [todoList, setTodoList] = useState([]);
  const [time, setTime] = useState('');
  const [intervalid, setIntervalid] = useState(null);

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
  }, [todoList]);

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
    return setTime(`${year} ${month}/${day} ${hour}:${minuite}:${second}`);
  };

  useEffect(() => {
    const id = setInterval(() => {
      currentTime();
    }, 1000);

    setIntervalid(id);

    return () => clearInterval(id);
  }, []);

  const startBt = () => {
    if (!intervalid) {
      const id = setInterval(() => currentTime(), 1000);
      setIntervalid(id);
    }
  };
  const stopBt = () => {
    if (intervalid) {
      clearInterval(intervalid);
      setIntervalid(null);
    }
  };
  return (
    <div className='wrapper'>
      <button onClick={stopBt}>time stop</button>
      <button onClick={startBt}>time start</button>
      <h1>{time}</h1>
      <h3>
        {famousSaying.message} <div style={{ fontSize: '16px' }}>- {famousSaying.author}</div>
      </h3>
      <TodoInput todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default App;
