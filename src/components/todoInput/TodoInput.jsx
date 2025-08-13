import { useState } from 'react';
import * as S from './TodoInput.styled';

const TodoInput = (pr) => {
  const [inputValue, setInputValue] = useState('');

  const checkValue = () => {
    const value = document.getElementById('inputBox').value;

    if (value) {
      pr.setTodoList([
        {
          id: Number(new Date()),
          content: inputValue,
          edit: false,
        },
        ...pr.todoList,
      ]),
        (document.getElementById('inputBox').value = ''),
        setInputValue('');
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
