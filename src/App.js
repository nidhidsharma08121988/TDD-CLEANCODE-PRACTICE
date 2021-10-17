import './App.css';
import ToDoList from './todo/ToDoList';

function App(props) {
  const { listItems } = props;
  const hasListItems = listItems && listItems.length > 0;
  const showNoItemsMessage = (
    <div className='noItemsMessage'>No items to display</div>
  );

  return hasListItems ? <ToDoList listItems={listItems} /> : showNoItemsMessage;
}

export default App;
