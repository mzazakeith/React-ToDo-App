import React from "react";

const Form = ({setInputText, todos, setTodos}) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
    } 
    return(
        <div>
            <form>
                <input type="text" onChange={inputTextHandler} className="todo-input" />
                <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="fas fa-plus-square"></i>
                </button>
                    <div className="select">
                        <select name="todos" className="filter-todo">
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