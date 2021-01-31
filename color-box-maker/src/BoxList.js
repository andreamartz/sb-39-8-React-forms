/**
 * BoxList component:
 * 
 *  * State that contains all of the boxes goes in this component.
 *  * renders all of the Box components 
 *  * renders the NewBoxForm component
 */

import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

/**
 * A single box in state looks like:
 * { id: 1, width: 150, height: 200, backgroundColor: "blue" }
 */
const BoxList = () => {
  const INITIAL_STATE = [];

  // boxes is an array of item objects in state
  const [boxes, setBoxes] = useState(INITIAL_STATE);

  // addBox:
  //   * a fcn that changes the boxes piece of state
  //   * pass in a newBox object to add to boxes
  const addBox = (newBox) => {
    setBoxes(boxes => [...boxes, {...newBox, id: uuid() }])
  };
  const removeBox = (id) => {
    setBoxes(boxes.filter(box => box.id !== id))
  }
  const boxComponents = boxes.map(box => 
    <Box 
      id = {box.id}
      width = {box.width}
      height = {box.height}
      backgroundColor = {box.backgroundColor}
      key = {box.id}
      removeBox = {removeBox}
    />
  )
  return (
    <>
      <h1>Boxes</h1>
      <NewBoxForm addBox={addBox} />
      {boxComponents}
    </>
  )
}

export default BoxList;