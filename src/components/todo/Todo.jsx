import { useRef } from 'react';
import EditTodo from './edittodo/Edittodo';
import * as S from './Todo.styled';

const Todo = (pr) => {
  const ref = useRef(null);

  const EditValue = async (id, content, edit) => {
    try {
      const res = await fetch(`http://localhost:3000/todo/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content, edit }),
      });
      const data = await res.json();
      console.log('수정완료', data);
    } catch (err) {
      console.error(err);
    }

    return pr.setTodoList((prev) => prev.map((el) => (el.id === pr.todo.id ? { ...el, edit: !el.edit } : el)));
  };

  // pr.todo.edit => 수정하기 , 수정완료 토글기능

  return (
    <S.Wrapper>
      <S.ListBox>
        {pr.todo.edit ? <EditTodo ref={ref} /> : <S.Content>{pr.todo.content}</S.Content>}
        <S.BtBox>
          {pr.todo.edit ? (
            <S.EditBt className='Bt' onClick={() => EditValue(pr.todo.id, ref.current.value, !pr.todo.edit)}>
              Done
            </S.EditBt>
          ) : (
            <S.EditBt className='Bt' onClick={() => EditValue(pr.todo.id, pr.todo.content, !pr.todo.edit)}>
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
