import ToDoItem from './ToDoItem';
import styles from './ToDoList.module.css';

const ToDoList = props => {
  const { listItems } = props;

  return (
    <div className={styles.listOfItems}>
      <ul>
        {listItems.map((item, index) => (
          <li key={index} data-testid='todo-item' className={styles.todoItem}>
            <ToDoItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ToDoList;
