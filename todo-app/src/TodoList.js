/**
 * TodoList:
 *   * renders the NewTodoForm component
 *   * renders the list of Todo components
 *   * holds state for all of the todos
 */

import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";


const TodoList = () => {
  // create variable to hold initial/reset values for TodoList
  // todos is an array of task objects
  const INITIAL_STATE = [
    {id: uuid(), task: 'Wash cats'},
    {id: uuid(), task: 'Feed cats'}
  ];
  const [todos, setTodos] = useState(INITIAL_STATE);

  // create fcn for adding a todo; pass this as prop to NewTodoForm
  // newTodo is an object of values from the NewTodoForm
  // ********* 
  // addTodo FUNCTION ALLOWS THE NewTodoForm component to UPDATE THE LSIT OF TODOS HERE IN TodoList!!!  
  // ********* 
  const addTodo = (newTodo) => {
    setTodos(todos => [
      ...todos,
      { ...newTodo, id: uuid() }
    ]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  // create fcn for removing a todo

  return (
    <div>
      <NewTodoForm addTodo={addTodo}/>
      <h2>Todo List</h2>
      <ul>
        {todos.map(({ id, task }) => <Todo id={id} task={task} removeTodo={removeTodo} key={id} />)}
      </ul>
    </div>
  )
}

export default TodoList;