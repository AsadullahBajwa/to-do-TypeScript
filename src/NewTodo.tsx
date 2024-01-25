
import React, { FormEvent, useContext, useRef } from "react";
import Todo from "./Todo";
import { context } from "./store/ContextProvider";

const NewTodo: React.FC  = () => {
    const todoctx=useContext(context);
    const newTodo = useRef<HTMLInputElement>(null);
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const todo=newTodo.current!.value;
        if(todo.trim().length===0)
        {
            return;
        }
        todoctx.addTodo(new Todo(todo));

    }
    return (
        <>
            <form onSubmit={handleSubmit} >
                <input type="text" ref={newTodo}></input>
                <input type="submit"></input>
            </form>
        </>
    );
}


export default NewTodo;