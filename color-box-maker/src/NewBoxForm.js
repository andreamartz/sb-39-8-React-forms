/**
 * NewBoxForm component:
 * 
 *  * renders a form that, when submitted, creates a new Box with width, height, and background color specified
 *  * When the form is submitted, clear the input values. (This requires state)
 */

import React, { useState } from "react";


const NewBoxForm = ({ addBox }) => {
  const initialState = {
    width: "150",
    height: "150",
    backgroundColor: "pink"
  }
  const [formData, setFormData] = useState(initialState);

  // handleChange will handle changes to form input fields
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    console.log("EVT: ", evt, "EVT TARGET: ", typeof evt.target, evt.target);
    
    setFormData(data => ({
      ...data,
      [name]: value
    }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { width, height, backgroundColor } = formData;
    console.log(`Created box with ${width}px width, ${height}px height, and background color ${backgroundColor}`)
    setFormData(initialState);
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