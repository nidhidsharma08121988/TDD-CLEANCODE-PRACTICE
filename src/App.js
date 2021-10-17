import './App.css';
import ToDoList from './todo/ToDoList';

function App(props) {
  const { listItems } = props;
  const hasListItems = listItems && listItems.length > 0;
  const showNoItemsMessage = (
    <div className='noItemsMessage'>No items to display</div>
  );

  return (
    <div className='app'>
      <div className='addNewTodoArea'>
        <input type='text' data-testid='add-new-todo' />
      </div>
      <div className=''>
        {hasListItems ? <ToDoList listItems={listItems} /> : showNoItemsMessage}
      </div>
    </div>
  );
}

export default App;
