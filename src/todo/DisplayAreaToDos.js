import ToDoList from './ToDoList';
import styles from './DisplayAreaToDos.module.css';
import { useEffect, useState } from 'react';
import { getTodoListAction } from '../redux-store/actions/todoActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const DisplayAreaToDos = props => {
  const [todoList, setTodoList] = useState(props.listItems);

  useEffect(() => {
    if (props.listItems === todoList) {
      props.getTodoListAction();
    }
    if (props.listItems !== ToDoList) {
      setTodoList(props.listItems);
    }
    //eslint-disable-next-line
  }, [props.listItems]);

  const hasListItems = todoList && todoList.length > 0;
  const showNoItemsMessage = (
    <div className={styles.noItemsMessage} data-testid='noList'>
      No items to display
    </div>
  );

  return (
    <div className={styles.displayTodoArea} data-testid='display-area-todo'>
      {hasListItems ? <ToDoList listItems={todoList} /> : showNoItemsMessage}
    </div>
  );
};

const mapStateToProps = state => ({
  listItems: state.todo_reducer.todos,
});

DisplayAreaToDos.propTypes = {
  listItems: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, { getTodoListAction })(
  DisplayAreaToDos
);
