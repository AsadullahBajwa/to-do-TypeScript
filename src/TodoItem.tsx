import React from "react";
import Todo from "./Todo";

const  TodoItem:React.FC <{ todo:Todo;onRemove:()=>void;}> =  (props)=>
{
return (
 <>
 <li onClick={props.onRemove}>
  {props.todo.title}
 </li>
 </>
);
}

export default TodoItem;