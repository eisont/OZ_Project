import Todo from '../todo/Todo';
import * as S from './TodoList.styled';

const TodoList = (pr) => {
  return (
    <S.Wrapper>
      {pr.todoList.map((el) => (
        <Todo key={el.id} todo={el} setTodoList={pr.setTodoList} />
      ))}
    </S.Wrapper>
  );
};

export default TodoList;
