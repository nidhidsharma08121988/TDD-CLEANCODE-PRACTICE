import ToDoList from './ToDoList';
import styles from './DisplayAreaToDos.module.css';

const DisplayAreaToDos = props => {
  const { listItems } = props;
  const hasListItems = listItems && listItems.length > 0;
  const showNoItemsMessage = (
    <div className={styles.noItemsMessage}>No items to display</div>
  );

  return (
    <div className={styles.displayTodoArea}>
      {hasListItems ? <ToDoList listItems={listItems} /> : showNoItemsMessage}
    </div>
  );
};

export default DisplayAreaToDos;
