import styles from './AddNewTodo.module.css';

const AddNewTodo = () => {
  return (
    <div className={styles.addNewTodoArea}>
      <textarea
        type='text'
        data-testid='input-new-todo'
        placeholder='Task To do...'
      />
      <button data-testid='submit-new-todo' className={styles.submitBtn}>
        <i className='fas fa-plus'></i>
      </button>
    </div>
  );
};

export default AddNewTodo;
