import { useState } from 'react';
import * as S from './TodoInput.styled';
import { addData } from '../../useApi';

const TodoInput = (pr) => {
  const [inputValue, setInputValue] = useState('');

  const checkValue = () => {
    const value = document.getElementById('inputBox').value;

    if (value) {
      addData(inputValue, pr.setTodoList), (document.getElementById('inputBox').value = ''), setInputValue('');
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
