import React from "react";
import { render } from '@testing-library/react';
import Todo from './Todo';

describe("Smoke tests", () => {
  test('renders without crashing', () => {
    render(<Todo />);
  });
});

describe("Snapshot tests", () => {
  test('matches snapshot', () => {
    const {asFragment} = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
  });
});