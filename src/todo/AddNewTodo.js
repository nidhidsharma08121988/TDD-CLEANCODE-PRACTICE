import styles from './AddNewTodo.module.css';

const AddNewTodo = () => {
  return (
    <div className={styles.addNewTodoArea}>
      <textarea
        type='text'
        data-testid='input-new-todo'
        placeholder='Task To do...'
      />
    </div>
  );
};

export default AddNewTodo;
