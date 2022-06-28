const TodoItem = (props) => {
  const { title, details, completed } = props.todo;
  return (
    <div>
      <h3>{title}</h3>
      <p>{details}</p>
      <h2>{completed}</h2>
    </div>
  );
};

export default TodoItem;
