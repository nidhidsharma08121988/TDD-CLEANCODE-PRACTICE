import AddNewTodo from './todo/AddNewTodo';
import './App.css';
import AppTitleAndNavigation from './AppTitleAndNavigation';
import DisplayAreaToDos from './todo/DisplayAreaToDos';
import { Provider } from 'react-redux';
import store from './redux-store/store';

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <AppTitleAndNavigation />
        <AddNewTodo />
        <DisplayAreaToDos />
      </div>
    </Provider>
  );
}

export default App;
