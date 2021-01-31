import React from "react";
import { render , fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

function addTodo(todoList, task="Wash the cat") {
  const taskInput = todoList.getByLabelText("What task do you want to add?");
  fireEvent.change(taskInput, { target: { value: task } });
  const submitButton = todoList.getByText("Add todo");
  fireEvent.click(submitButton);         // submit the form data
}

describe("Smoke tests", () => {
  test('renders without crashing', () => {
    render(<TodoList />);
  });
});

describe("Snapshot tests", () => {
  test('matches snapshot', () => {
    const {asFragment} = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Business logic", () => {
  test('adds new task', () => {
    // expect no tasks on the page
    const todoList = render(<TodoList />);
    expect(todoList.queryByText('X')).not.toBeInTheDocument();

    // add a task and expect form to clear
    addTodo(todoList);
    expect(todoList.getByLabelText('What task do you want to add?')).toHaveValue("");

    // expect a task on the page
    expect(todoList.getByText("Wash the cat")).toBeInTheDocument();
    expect(todoList.getByText("X")).toBeInTheDocument();
  });

  test("deletes a task", function() {
    const todoList = render(<TodoList />);
    addTodo(todoList);
  
    fireEvent.click(todoList.getByText("X"));
  
    // expect todo to be gone
    expect(todoList.queryByText("Wash the cat")).not.toBeInTheDocument();
  });
});