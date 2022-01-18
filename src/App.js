import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import {useState} from 'react'

function App() {
  const[inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Simple ToDo List</h1>
      </header>
      <Form inputText = {inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
      <TodoList/>
    </div>
  );
}

export default App;
