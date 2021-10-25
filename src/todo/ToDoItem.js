import styles from './ToDoItem.module.css';
import PropTypes from 'prop-types';
import { toggleCompletedAction } from '../redux-store/actions/todoActions';
import { connect } from 'react-redux';

const ToDoItem = props => {
  const { item, toggleCompletedAction } = props;

  return (
    <div
      data-testid='todo-text'
      className={item.completed ? styles.completed : styles.todoText}
      onClick={() => item.id && toggleCompletedAction(item.id)}
    >
      {item.title}
    </div>
  );
};

ToDoItem.propTypes = {
  item: PropTypes.object.isRequired,
  toggleCompletedAction: PropTypes.func.isRequired,
};

export default connect(null, { toggleCompletedAction })(ToDoItem);
