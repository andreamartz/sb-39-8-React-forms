/**
 * NewTodoForm:
 *   * renders a form with one text input for the task to be created
 *   * controls the state of form data
 *   * when this form is submitted, a new Todo component should be created
 */

import React, { useState } from "react"

// const NewTodoForm = ({ addTodo }) => {
const NewTodoForm = ({ addTodo }) => {
  const INITIAL_STATE = {
    task: ''
  }

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(data => ({       // data is the current form data
      ...data,
      [name]: value
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo({ ...formData });     // use the passed down fcn addTodo to create a new todo/task in state
    setFormData(INITIAL_STATE);   // reset the state of the form data
  }

  return (
    <div>
      <h1>Todo Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Todo</label>
        <input
          id="task"
          name="task"
          type="text"
          placeholder="task"
          value = {formData.task}
          onChange={handleChange}
        />
        <button>Add todo</button>
      </form>
    </div>
  )
}

export default NewTodoForm;