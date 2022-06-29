const TodoItem = (props) => {
  const { title, details, completed } = props.todo;
  return (
    <div>
      <h3>{title}</h3>
      <p>{details}</p>
      <h4>{completed + ""}</h4>
    </div>
  );
};

export default TodoItem;
