import styles from './AddNewTodo.module.css';

const AddNewTodo = () => {
  const inputTodo = (
    <textarea
      type='text'
      data-testid='input-new-todo'
      placeholder='Task To do...'
    />
  );

  const submitTodo = (
    <button data-testid='submit-new-todo' className={styles.submitBtn}>
      <i className='fas fa-plus'></i>
    </button>
  );

  return (
    <div className={styles.addNewTodoArea}>
      {inputTodo}
      {submitTodo}
    </div>
  );
};

export default AddNewTodo;
