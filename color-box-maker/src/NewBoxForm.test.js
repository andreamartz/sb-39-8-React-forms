import React from "react";
import { render } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

describe("Smoke tests", () => {
  test('renders without crashing', () => {
    render(<NewBoxForm />);
  });
});

describe("Snapshot tests", () => {
  test('matches snapshot', () => {
    const {asFragment} = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});