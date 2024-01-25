
import Todo from "../Todo";
import React from "react";
import { useState } from "react";
export type TodoContext ={
    todos:Todo[],
    addTodo:(todo:Todo)=>void,
    removeTodo:(id:string)=>void

}
export const context=React.createContext<TodoContext>({
    todos:[],
    addTodo:()=>{},
    removeTodo:()=>{}
});

const ContextProvider:React.FC = (props)=>
{
    const [todos,setTodo]  = useState<Todo[]>([]);

    function handleNewTodo(todo:Todo)
    {

      setTodo((currentState)=>{
        return currentState.concat(todo);
      });
    
    }
    function handleRemoveTodo(id:string)
    {
      setTodo((currentState)=>{
        return todos.filter((todo)=>todo.id!=id);
      })
    }
    const todosContext={
        todos:todos,
        addTodo:handleNewTodo,
        removeTodo:handleRemoveTodo

    }
return (
<context.Provider value={todosContext}>
 {props.children}
</context.Provider>
);
}

export default ContextProvider;