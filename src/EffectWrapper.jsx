import { useEffect, useState, useRef } from 'react';
import App from './App';

const EffectWrapper = () => {
  const [todoList, setTodoList] = useState([]);
  const [famousSaying, setFamousSaying] = useState({ author: '', message: '' });
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
    const day = String(today.getDate()).padStart(2, '0');
    const hour = String(today.getHours()).padStart(2, '0');
    const minuite = String(today.getMinutes()).padStart(2, '0');
    const second = String(today.getSeconds()).padStart(2, '0');
    setTime(`${year} ${month}/${day} ${hour}:${minuite}:${second}`);
  };

  const intervalRef = useRef();

  useEffect(() => {
    currentTime();

    intervalRef.current = setInterval(currentTime, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return <App famousSaying={famousSaying} time={time} intervalRef={intervalRef} currentTime={currentTime} todoList={todoList} setTodoList={setTodoList} />;
};

export default EffectWrapper;
