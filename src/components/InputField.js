import React, { useState } from "react";
import "./InputField.css";

export default function InputField(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleClick() {
    text !== "" &&
      text !== " " &&
      props.setItem((prevValue) => {
        return [...prevValue, text];
      });
    setText("");
  }

  return (
    <div className="form">
      <input
        className="mb-4 pt-2 pb-2 w-50"
        onChange={handleChange}
        value={text}
        type="text"
      />
      <button
        className="btn mb-4 mt-4 w-25 rounded-pill pt-2 pb-2"
        onClick={handleClick}
      >
        <span>Add</span>
      </button>
    </div>
  );
}
