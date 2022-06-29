import TodosItem from "./TodosItem";
// import todos from "../data/todosData";

const TodosList = (props) => {
  // const { todos } = props;
  return (
    <div>
      <h2>To-Dos</h2>
      {props.todosData.map((todo, idx) => (
        <TodosItem todo={todo} key={idx} />
      ))}
    </div>
  );
};

export default TodosList;
