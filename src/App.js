import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import {useState, useEffect} from 'react'

function App() {
  const[inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  const[status, setStatus] = useState("all");
  const[filteredTodos, setFilteredTodos] = useState([]);

  useEffect(()=>{
    getLocalTodos();
  },[])

  useEffect(()=> {
    filteredHandler();
    saveLocalTodos();
  }, [todos, status])

  const filteredHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos)
    }
  }

    // saving to local storage
    const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
      if(localStorage.getItem("todos")===null){
          localStorage.setItem("todos", JSON.stringify([]));
      }else{
          let todoLocal = JSON.parse(localStorage.getItem("todos"));
          setTodos(todoLocal);
      }
  };

  return (
    <div className="App">
      <header>
        <h1>Simple ToDo List</h1>
      </header>
      <Form inputText = {inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus}/>
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
