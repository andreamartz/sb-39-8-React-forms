import React from "react";
import { render , fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

function addBox(boxList, width = "200", height = "150", color = "teal") {
  const heightInput = boxList.getByLabelText("Height (px)");
  const widthInput = boxList.getByLabelText("Width (px)");
  const backgroundInput = boxList.getByLabelText("Background Color");
  fireEvent.change(backgroundInput, { target: { value: color } });
  fireEvent.change(widthInput, { target: { value: width } });
  fireEvent.change(heightInput, { target: { value: height } });
  const button = boxList.getByText("Make box");
  fireEvent.click(button);         // submit the form data
}

describe("Smoke tests", () => {
  test('renders without crashing', () => {
    render(<BoxList />);
  });
});

describe("Snapshot tests", () => {
  test('matches snapshot', () => {
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Business logic", () => {
  test('should add new box', () => {
    const boxList = render(<BoxList />);
    
    // expect no boxes on the page
    expect(boxList.queryByText('X')).not.toBeInTheDocument();

    // expect a box on the page
    addBox(boxList);
    const removeButton = boxList.getByText("X");
    expect(removeButton).toBeInTheDocument();
    expect(removeButton.previousSibling).toHaveStyle(`
      width: 200px;
      height: 150px;
      background-color: teal;
    `);

    // expect form to be empty
    expect(boxList.getAllByDisplayValue('')).toHaveLength(3);
  });
  
  test('should remove the correct box', () => {
    
  });
});