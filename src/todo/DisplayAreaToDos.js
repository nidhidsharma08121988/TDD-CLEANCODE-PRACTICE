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

  const showNoItemsMessage = (
    <div className={styles.noItemsMessage} data-testid='noList'>
      No items to display
    </div>
  );

  const hasListItems = todoList && todoList.length > 0;

  const thereIsError = props.showListError;

  const displayErrorMessage = (
    <div data-testid='display-error' className={styles.errorMessage}>
      Something is wrong
    </div>
  );

  return (
    <div className={styles.displayTodoArea} data-testid='display-area-todo'>
      {hasListItems ? (
        <ToDoList listItems={todoList} />
      ) : thereIsError ? (
        displayErrorMessage
      ) : (
        showNoItemsMessage
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  listItems: state.todo_reducer.todos,
  showListError: state.todo_reducer.showListError,
});

DisplayAreaToDos.propTypes = {
  listItems: PropTypes.array.isRequired,
  getTodoListAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getTodoListAction })(
  DisplayAreaToDos
);
