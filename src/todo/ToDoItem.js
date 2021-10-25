import styles from './ToDoItem.module.css';
import PropTypes from 'prop-types';

const ToDoItem = props => {
  const { item } = props;
  return <p className={item.completed ? styles.completed : ''}>{item.title}</p>;
};

ToDoItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ToDoItem;
