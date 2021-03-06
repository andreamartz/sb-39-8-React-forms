import React from "react"
import { render } from '@testing-library/react';
import App from './App';

describe("Smoke tests", () => {
  test('renders without crashing', () => {
    render(<App />);
  });
});

describe("Snapshot tests", () => {
  test('matches snapshot', () => {
    const {asFragment} = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});