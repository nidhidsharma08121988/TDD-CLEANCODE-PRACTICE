import styles from './AddNewTodo.module.css';

const AddNewTodo = () => {
  return (
    <div className={styles.addNewTodoArea}>
      <textarea
        type='text'
        data-testid='input-new-todo'
        placeholder='Task To do...'
      />
      <button data-testid='submit-new-todo'>Add</button>
    </div>
  );
};

export default AddNewTodo;
