import React from "react";
import "./input_styles.css";

export const Input = (props) => {
  const { tag, type, name, placeholder, capture } = props;

  return (
    <div className="container__input">
      <label htmlFor={name}>{tag}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={(e) => capture(e)}
      />
    </div>
  );
};
