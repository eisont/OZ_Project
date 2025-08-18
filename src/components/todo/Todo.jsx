import { useRef } from 'react';
import EditTodo from './edittodo/Edittodo';
import * as S from './Todo.styled';

const Todo = (pr) => {
  const ref = useRef(null);

  const DeleteBt = async (id) => {
    try {
      const deleteRes = await fetch(`http://localhost:3000/todo/${id}`, {
        method: 'DELETE',
      });
      await deleteRes.json();

      const getRes = await fetch('http://localhost:3000/todo');
      const json2 = await getRes.json();
      pr.setTodoList(json2);
    } catch (err) {
      console.error(err);
    }
  };

  const EditValue = async (id, content, edit) => {
    try {
      const res = await fetch(`http://localhost:3000/todo/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content, edit }),
      });
      await res.json();
      fetch(`http://localhost:3000/todo`)
        .then((res) => res.json())
        .then((res) => pr.setTodoList(res));
    } catch (err) {
      console.error(err);
    }
  };

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
          <S.DeleteBt className='Bt' onClick={() => DeleteBt(pr.todo.id)}>
            X
          </S.DeleteBt>
        </S.BtBox>
      </S.ListBox>
    </S.Wrapper>
  );
};

export default Todo;
