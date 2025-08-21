import { useEffect, useState } from 'react';
import TodoInput from '../../src/shared/components/todoInput';
import TodoList from '../../src/shared/components/todolist';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FamousSaying = styled.div`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
`;

const TodoListPage = () => {
  const [todoList, setTodoList] = useState([]);
  const [famousSaying, setFamousSaying] = useState({ author: '', message: '' });

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

  return (
    <Wrapper>
      <FamousSaying>
        {famousSaying.message} <div style={{ fontSize: '16px' }}>- {famousSaying.author}</div>
      </FamousSaying>
      <TodoInput setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </Wrapper>
  );
};

export default TodoListPage;
