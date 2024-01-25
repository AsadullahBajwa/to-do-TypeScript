import React, { useState } from 'react';
import Todos from './Todos';
import Todo from './Todo';
import NewTodo from './NewTodo';
import ContextProvider from './store/ContextProvider';
const App:React.FC=()=> { 
  return (
    <ContextProvider>
        <NewTodo ></NewTodo>
        <Todos/>
    </ContextProvider>
  );
}

export default App;
