import { useRef } from 'react';
import EditTodo from './edittodo/Edittodo';
import * as S from './Todo.styled';

const Todo = (pr) => {
  const ref = useRef(null);
  console.log(ref.current);

  const DoneValue = () => {
    pr.setTodoList((prev) => prev.map((el) => (el.id === pr.todo.id && ref.current.value ? { ...el, content: ref.current.value, edit: !el.edit } : el)));
  };
  const EditValue = () => {
    return pr.setTodoList((prev) => prev.map((el) => (el.id === pr.todo.id ? { ...el, edit: !el.edit } : el)));
  };

  // pr.todo.edit => 수정하기 , 수정완료 토글기능

  return (
    <S.Wrapper>
      <S.ListBox>
        {pr.todo.edit ? <EditTodo ref={ref} /> : <S.Content>{pr.todo.content}</S.Content>}
        <S.BtBox>
          {pr.todo.edit ? (
            <S.EditBt className='Bt' onClick={DoneValue}>
              Done
            </S.EditBt>
          ) : (
            <S.EditBt className='Bt' onClick={EditValue}>
              Edit
            </S.EditBt>
          )}
          <S.DeleteBt
            className='Bt'
            onClick={() => {
              pr.setTodoList((prev) => prev.filter((el) => el.id !== pr.todo.id));
            }}
          >
            X
          </S.DeleteBt>
        </S.BtBox>
      </S.ListBox>
    </S.Wrapper>
  );
};

export default Todo;
