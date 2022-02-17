import "./select_styles.css";

export const Select = (props) => {
  const { options, text, name, status, cambio, textError } = props;

  const onChange = (e) => {
    cambio({ ...status, field: e.target.value });
  };

  var classNameSelect = "container__select";
  var classNameP = "container__pselect";
  var classNameError = "container__p";

  const validation = () => {
    if (status.field === "Seleccione" || status.field === "") {
      cambio({ ...status, valid: "false" });
    } else {
      cambio({ ...status, valid: "true" });
    }
  };

  const changeStyles = () => {
    if (status.valid === "true") {
      classNameSelect += " container__select-correct";
      classNameError += " container__p-correct";
    } else if (status.valid === "false") {
      classNameSelect += " container__select-incorrect";
      classNameP += " container__pselect-incorrect";
      classNameError += " container__p-incorrect";
    }
  };

  changeStyles();

  return (
    <div>
      <p className={classNameP}>{text}</p>
      <select
        name={name}
        className={classNameSelect}
        defaultValue=""
        onChange={onChange}
        onBlur={validation}
        onKeyUp={validation}
      >
        {options.map((option, index) => {
          return <option key={index}>{option.label}</option>;
        })}
      </select>
      <p className={classNameError}>{textError}</p>
    </div>
  );
};
