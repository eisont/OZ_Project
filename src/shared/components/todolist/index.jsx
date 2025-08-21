import Todo from '../Todo';

const TodoList = (pr) => {
  return (
    <div>
      {pr.todoList.map((el) => (
        <Todo key={el.id} todo={el} setTodoList={pr.setTodoList} />
      ))}
    </div>
  );
};

export default TodoList;
