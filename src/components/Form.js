import React from "react";

let lastId = 0;
const Form = ({inputText,setInputText, todos, setTodos, setStatus}) => {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {id:++lastId, text:inputText, completed:false }
            
        ]);
        setInputText("")
    };

    const statusHandler = (e) =>{
        setStatus(e.target.value)
    };

    return(
        <div>
            <form>
                <input value={inputText} type="text" onChange={inputTextHandler} className="todo-input" />
                <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="fas fa-plus-square"></i>
                </button>
                    <div className="select">
                        <select onChange={statusHandler} name="todos" className="filter-todo">
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="uncompleted">Uncompleted</option>
                        </select>
                    </div>
            </form>
      </div>
    );
}

export default Form