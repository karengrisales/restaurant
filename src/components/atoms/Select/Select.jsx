import React from "react";
import "./select_styles.css";

export const Select = (props) => {
  const { options, text, capture, name } = props;

  return (
    <div className="container__select">
      <p>{text}</p>
      <select name={name} defaultValue="" onChange={(e) => capture(e)}>
        {options.map((option, index) => {
          return <option key={index}>{option.label}</option>;
        })}
      </select>
    </div>
  );
};
