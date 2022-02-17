import React from "react";
import "./input_styles.css";

export const Input = (props) => {
  const {
    tag,
    type,
    name,
    placeholder,
    textError,
    regex,
    status,
    changeStatus,
  } = props;

  const onChange = (e) => {
    changeStatus({ ...status, field: e.target.value });
  };

  var classNameInput = "container__input";
  var classNameLabel = "container__label";
  var classNameError = "container__p";

  const validation = () => {
    if (regex) {
      if (regex.test(status.field)) {
        changeStatus({ ...status, valid: "true" });
      } else {
        changeStatus({ ...status, valid: "false" });
      }
    }
  };

  const changeStyles = () => {
    if (status.valid === "true") {
      classNameInput += " container__input-correct";
      classNameError += " container__p-correct";
    } else if (status.valid === "false") {
      classNameInput += " container__input-incorrect";
      classNameLabel += " container__label-incorrect";
      classNameError += " container__p-incorrect";
    }
  };

  changeStyles();

  return (
    <div>
      <label htmlFor={name} className={classNameLabel}>
        {tag}
      </label>
      <input
        className={classNameInput}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={validation}
        onKeyUp={validation}
        value={status.field}
      />
      <p className={classNameError}>{textError}</p>
    </div>
  );
};
