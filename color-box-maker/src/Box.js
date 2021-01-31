/**
 * Box component:
 * 
 *  * displays a div with a background color, width and height based on the props passed to it.
 */

import React from "react";

const Box = ({ id, key, width, height, backgroundColor, removeBox }) => {
  const handleRemove = () => removeBox(id);
  return (
    <div>
      <div
        style={{
          display: "inline-block",
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor
        }}
        aria-label={`${backgroundColor} box`}
      >
      </div>
      <button aria-label='Remove box' onClick={handleRemove}>X</button>
    </div>
  )
}

export default Box;