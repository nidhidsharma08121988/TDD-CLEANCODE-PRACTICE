import { useState } from 'react';
import styles from './AddNewTodo.module.css';
import { connect } from 'react-redux';
import { addNewTodoAction } from '../redux-store/actions/todoActions';
import PropTypes from 'prop-types';

const AddNewTodo = props => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    const textAreaNotEmpty = text.trim() !== '';

    if (textAreaNotEmpty) {
      const id = Math.floor(Math.random() * 10) + 1;

      const todo = {
        title: text,
        completed: false,
        userId: 1,
        id: id,
      };

      props.addNewTodoAction(todo);
      setText('');
    }
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

AddNewTodo.propTypes = {
  addNewTodoAction: PropTypes.func.isRequired,
};

export default connect(null, { addNewTodoAction })(AddNewTodo);
