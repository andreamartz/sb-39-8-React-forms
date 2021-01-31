/**
 * NewBoxForm component:
 * 
 *  * renders a form that, when submitted, creates a new Box with width, height, and background color specified
 *  * When the form is submitted, clear the input values. (This requires state)
 */

import React, { useState } from "react";


const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    width: '',
    height: '',
    backgroundColor: ''
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  // handleChange will handle changes to form input fields
  const handleChange = (evt) => {
    const { name, value } = evt.target;  // name and value come from the target input
    
    setFormData(data => ({
      ...data,         // use spread operator to insert the formData we currently have
      [name]: value    // in the current formData, change only the value corresponding to the computed value of name
    }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { width, height, backgroundColor } = formData;
    // add the new box to state
    addBox({ ...formData });
    console.log(`Created box with ${width}px width, ${height}px height, and background color ${backgroundColor}`)
    setFormData(INITIAL_STATE);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width (px)</label>
      <input 
        id="width" 
        type="text" 
        name="width"      // name matches what is in state
        placeholder="width" 
        value={formData.width} 
        onChange={handleChange}
      >
      </input>

      <label htmlFor="height">Height (px)</label>
      <input 
        id="height" 
        type="text" 
        name="height"      // name matches what is in state
        placeholder="height" 
        value={formData.height} 
        onChange={handleChange}
      >
      </input>

      <label htmlFor="backgroundColor">Background Color</label>
      <input 
        id="backgroundColor" 
        type="text" 
        name="backgroundColor"      // name matches what is in state
        placeholder="background color" 
        value={formData.backgroundColor} 
        onChange={handleChange}
      >
      </input>
      <button>Make box</button>
    </form>
  )
}

export default NewBoxForm;