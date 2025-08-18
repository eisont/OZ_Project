import { useState } from 'react';
import * as S from './TodoInput.styled';

const TodoInput = (pr) => {
  const [inputValue, setInputValue] = useState('');

  const addData = async (content) => {
    try {
      const res = await fetch('http://localhost:3000/todo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: Number(new Date()).toString(),
          content,
          edit: false,
        }),
      });
      await res.json();

      const res2 = await fetch('http://localhost:3000/todo');
      const json2 = await res2.json();
      pr.setTodoList(json2);
    } catch (err) {
      console.error(err);
    }
  };

  const checkValue = () => {
    const value = document.getElementById('inputBox').value;

    if (value) {
      addData(inputValue), (document.getElementById('inputBox').value = ''), setInputValue('');
    } else {
      alert('할 일을 적어주세요.');
    }
  };

  return (
    <S.Wrapper>
      <S.InputBox id='inputBox' onChange={(e) => setInputValue(e.target.value)} />
      <S.AddBt onClick={checkValue}>+</S.AddBt>
    </S.Wrapper>
  );
};

export default TodoInput;
