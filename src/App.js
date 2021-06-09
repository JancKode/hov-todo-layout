import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';
import List from './components/List/List';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header />

        <AddTodo />
        <List />
      </div>
    </div>
  );
}

export default App;
