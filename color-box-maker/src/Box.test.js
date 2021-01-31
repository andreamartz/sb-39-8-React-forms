import React from "react";
import { render } from '@testing-library/react';
import Box from './Box';

describe("Smoke tests", () => {
  test('renders without crashing', () => {
    render(<Box />);
  });
});

describe("Snapshot tests", () => {
  test('matches snapshot', () => {
    const {asFragment} = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
  });
});