import TodosItem from "./TodosItem";
import todos from "../data/todosData";

const TodosList = (props) => {
  // const { todos } = props;
  return (
    <div>
      <h2>To-Dos</h2>
      {todos.map((todo) => (
        <TodosItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodosList;
