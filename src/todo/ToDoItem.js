import styles from './ToDoItem.module.css';
import PropTypes from 'prop-types';
import { toggleCompletedAction } from '../redux-store/actions/todoActions';
import { connect } from 'react-redux';
import { deleteTodoAction } from '../redux-store/actions/todoActions';

const ToDoItem = props => {
  const { item, toggleCompletedAction, deleteTodoAction } = props;

  const toggleCompletedState = () => item.id && toggleCompletedAction(item.id);

  return (
    <div
      data-testid='todo-text'
      className={styles.todoText}
      onClick={toggleCompletedState}
    >
      <p data-testid='title' className={item.completed ? styles.completed : ''}>
        {item.title}
      </p>
      <button
        className={styles.deleteBtn}
        data-testid='delete-todo-btn'
        onClick={() => item.id && deleteTodoAction(item.id)}
        aria-label='delete button'
      >
        x
      </button>
    </div>
  );
};

ToDoItem.propTypes = {
  item: PropTypes.object.isRequired,
  toggleCompletedAction: PropTypes.func.isRequired,
  deleteTodoAction: PropTypes.func.isRequired,
};

export default connect(null, { toggleCompletedAction, deleteTodoAction })(
  ToDoItem
);
