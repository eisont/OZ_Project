import { useRef } from 'react';
import { modifyData } from '../../hooks/useApi';
import EditTodo from './Edittodo';
import * as S from './Todo.styled';

const Todo = (pr) => {
  const ref = useRef(null);

  return (
    <S.Wrapper>
      <S.ListBox>
        {pr.todo.edit ? <EditTodo ref={ref} /> : <S.Content>{pr.todo.content}</S.Content>}
        <S.BtBox>
          {pr.todo.edit ? (
            <S.EditBt onClick={() => modifyData(`PATCH`, pr.todo.id, pr.setTodoList, ref.current.value, !pr.todo.edit)}>Done</S.EditBt>
          ) : (
            <S.EditBt onClick={() => modifyData(`PATCH`, pr.todo.id, pr.setTodoList, pr.todo.content, !pr.todo.edit)}>Edit</S.EditBt>
          )}
          <S.DeleteBt onClick={() => modifyData(`DELETE`, pr.todo.id, pr.setTodoList)}>X</S.DeleteBt>
        </S.BtBox>
      </S.ListBox>
    </S.Wrapper>
  );
};

export default Todo;
