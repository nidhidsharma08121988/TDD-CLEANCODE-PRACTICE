import { useState } from 'react';
import styles from './AddNewTodo.module.css';

const AddNewTodo = () => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    setText('');
  };

  const inputTodo = (
    <textarea
      type='text'
      data-testid='input-new-todo'
      placeholder='Task To do...'
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );

  const submitTodo = (
    <button
      data-testid='submit-new-todo'
      className={styles.submitBtn}
      onClick={handleSubmit}
    >
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
