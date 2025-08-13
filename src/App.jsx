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
// json-server를 사용해 Todo 정보를 파일로 저장해 보세요.
// Custom Hook을 만들고 사용해 보세요.

const App = () => {
  const test = () => {
    fetch('http://localhost:3000/todo', {
      method: 'POST',
      body: JSON.stringify({
        id: '1',
        content: 'ddkdk',
        edit: false,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log('res', res));
  };

  const [famousSaying, setFamousSaying] = useState({ author: '', message: '' });
  const [todoList, setTodoList] = useState([]);
  const [time, setTime] = useState('');
  const [intervalid, setIntervalid] = useState(null);

  useEffect(() => {
    fetch('https://korean-advice-open-api.vercel.app/api/advice')
      .then((res) => res.json())
      .then((res) => setFamousSaying({ author: res.author, message: res.message }));
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
    const id = setInterval(() => currentTime(), 1000);
    setIntervalid(id);

    return clearInterval(intervalid);
  }, [intervalid]);

  return (
    <div className='wrapper'>
      <button onClick={test}>ddd</button>
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
