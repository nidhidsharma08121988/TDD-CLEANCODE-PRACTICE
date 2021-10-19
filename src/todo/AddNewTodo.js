import styles from './AddNewTodo.module.css';

const AddNewTodo = () => {
  return (
    <div className={styles.addNewTodoArea}>
      <textarea type='text' data-testid='add-new-todo' />
    </div>
  );
};

export default AddNewTodo;
