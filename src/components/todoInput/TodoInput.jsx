import { useState } from 'react';
import * as S from './TodoInput.styled';

const TodoInput = () => {
  const [inputValue, setInputValue] = useState('');

  // 데이터 등록하기
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
      const json = await res.json();
      console.log('등록 완료', json);
    } catch (err) {
      console.log(err);
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
