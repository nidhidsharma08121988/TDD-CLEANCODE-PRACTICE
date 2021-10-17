const ToDoItem = props => {
  const { item } = props;
  return <p>{item.title}</p>;
};

export default ToDoItem;
