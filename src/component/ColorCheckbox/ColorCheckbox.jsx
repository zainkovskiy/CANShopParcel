import React from "react";

import './ColorCheckbox.css';

function ColorCheckbox (props) {
  const { color, name, changeColor, colorId} = props;
  return (
    <label>
      <input
        type="radio"
        name={ name }
        checked={colorId === color.id}
        onChange={() => changeColor(color.id, color.image)}
      />
      <span
        className="checkbox"
        style={ {backgroundColor: color.color} }
      >
      </span>
    </label>
  )
}

export default ColorCheckbox;