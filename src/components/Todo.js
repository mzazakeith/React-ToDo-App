import React from "react";
import {produce} from 'immer'

let index = '';

const Todo= ({todo, todos, setTodos, text}) => {
    const deleteHandler = () =>{
         setTodos(todos.filter(item => item.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return produce(item, completeItem => {
                    completeItem.completed = true;
                })
            }
            return item;
        }))
    }


    return(
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    );
};

export default Todo