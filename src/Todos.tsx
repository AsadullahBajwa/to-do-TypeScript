import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import Todo from './Todo';
import { context } from './store/ContextProvider';

const Todos:React.FC=()=> {
  const todoctx=useContext(context);
  return (
    <div>
        <ul>
        {
         todoctx.todos.map((item)=>
            <TodoItem onRemove={todoctx.removeTodo.bind(null,item.id)} todo={item}></TodoItem>
         )   
        }
        </ul>
        
    </div>
  );
}

export default Todos;
