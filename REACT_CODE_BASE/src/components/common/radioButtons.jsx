import React from "react";

const RadioButtons = ({
  buttons,
  label,
  onChange,
  optionalFnCall = "",
  error
}) => {
  return (
    <React.Fragment>
      <label htmlFor={label}>{label}</label> <br />
      {buttons.map((btn, index) => (
        <label key={index} htmlFor={index + btn.value.toString()}>
          <input
            type="radio"
            name={btn.name}
            id={index + btn.value.toString()}
            onChange={event => onChange(event, optionalFnCall)}
            value={btn.value}
          />{" "}
          {btn.title} &nbsp;
        </label>
      ))}
      <br />
      <small className="text-danger">{error}</small>
    </React.Fragment>
  );
};

export default RadioButtons;
