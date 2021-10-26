import styles from './ToDoItem.module.css';
import PropTypes from 'prop-types';
import { toggleCompletedAction } from '../redux-store/actions/todoActions';
import { connect } from 'react-redux';
import { deleteTodoAction } from '../redux-store/actions/todoActions';

const ToDoItem = props => {
  const { item, toggleCompletedAction } = props;

  const toggleCompletedState = () => item.id && toggleCompletedAction(item.id);

  return (
    <div
      data-testid='todo-text'
      className={item.completed ? styles.completed : styles.todoText}
      onClick={toggleCompletedState}
    >
      {item.title}
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
