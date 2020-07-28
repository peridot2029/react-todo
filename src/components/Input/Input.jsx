import React from "react";
import { func, string, bool } from "prop-types";
import classNames from "classnames";
import "./Input.scss";

const Input = ({ type = "text", label, name, id, active, value, ...props }) => {
  const inputClass = classNames(
    "input",
    name === "add" && `input--${name}`,
    { "input__is-readonly": !active && id },
    { "input--edit": active && id }
  );

  const labelClass = classNames(
    "label",
    name === "add" && `label--${name}`,
    { "label__is-readonly": !active && id },
    { "label--edit": active && id }
  );
  const handleChange = (e) => {
    const { onChange } = props;

    if (onChange) {
      onChange(e.target.value);
    }
  };
  console.log(active);

  return (
    <>
      <label htmlFor={id} className={labelClass}>
        {!label && <span className="label__input">{value}</span>}

        <input
          type={type}
          id={id}
          className={inputClass}
          value={value}
          onChange={handleChange}
        />
      </label>
    </>
  );
};

Input.propTypes = {
  type: string,
  id: string,
  active: bool,
  value: string,
  onChange: func,
};

export default Input;
