import React, { useState } from "react";

export default function List(props) {
  const [line, setLine] = useState(false);

  function handleStrike() {
    setLine((prevValue) => {
      return !prevValue;
    });
  }

  const strikeThrough = {
    textDecoration: line ? "line-through" : "none"
  };

  return (
    <span key={props.index} onClick={handleStrike} style={strikeThrough}>
      {props.item}
    </span>
  );
}
