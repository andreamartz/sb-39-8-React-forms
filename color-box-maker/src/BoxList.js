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

const BoxList = () => {
  const INITIAL_STATE = [
    { 
      id: uuid(), 
      width: "150px",
      height: "200px",
      backgroundColor: "blue"
    },
    {
      id: uuid(),
      width: "300px",
      height: "300px",
      backgroundColor: "green"
    }
  ];
  const [boxes, setBoxes] = useState(INITIAL_STATE);
  const addBox = (newBox) => {
    setBoxes(boxes => [...boxes, {...newBox, id: uuid() }])
  };
  return (
    <>
      <h1>Boxes</h1>
      <NewBoxForm addBox={addBox} />
      <div>
        {boxes.map(({ width, height, backgroundColor }) => <Box id={id} width={width} height={height} key={id} />)}
      </div>
    </>
  )
}

export default BoxList;