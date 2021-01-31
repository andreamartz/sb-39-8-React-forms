/**
 * Todo:
 *   * display a divv with the task of the todo
 */

import React from "react";

const Todo = ({ id, task, removeTodo }) => {
  const handleRemove = () => {
    removeTodo(id);
  }
  return (
    <li id={`${id}`}>{task} <span onClick={handleRemove}> X </span></li>
  )
}

export default Todo;
