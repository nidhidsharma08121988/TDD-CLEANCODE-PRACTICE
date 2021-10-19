import AddNewTodo from './todo/AddNewTodo';
import './App.css';
import AppTitleAndNavigation from './AppTitleAndNavigation';
import DisplayAreaToDos from './todo/DisplayAreaToDos';

function App(props) {
  return (
    <div className='app'>
      <AppTitleAndNavigation />
      <AddNewTodo />
      <DisplayAreaToDos />
    </div>
  );
}

export default App;
