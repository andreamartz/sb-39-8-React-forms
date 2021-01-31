import React from "react";
import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

describe("Smoke tests", () => {
  test('renders without crashing', () => {
    render(<NewTodoForm />);
  });
});

describe("Snapshot tests", () => {
  test('matches snapshot', () => {
    const {asFragment} = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});