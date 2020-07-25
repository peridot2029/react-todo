import React from "react";
import { func, string } from "prop-types";
import classNames from "classnames";
import "./Input.scss";

const Input = ({ type, name, id, active, value, ...props }) => {
  const inputClass = classNames(
    "input",
    type.includes("checkbox") && `input-${type}`,
    name && `input-${name}`
  );

  const labelClass = classNames(
    "label",
    type.includes("checkbox") && `label-${type}`,
    name && `label-${name}`,
    active && "a11y-hidden"
  );

  const handleChange = (e) => {
    const { onChange } = props;

    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleClick = (e) => {
    const { onClick } = props;

    if (onClick) {
      onClick(e.target.value);
    }
  };

  return (
    <>
      <label htmlFor={id} className={labelClass} />
      <span>{!active && value}</span>
      <input
        type={type}
        id={id}
        className={inputClass}
        value={value}
        onChange={handleChange}
        onClick={handleClick}
      />
    </>
  );
};

Input.propTypes = {
  type: string.isRequired,
  onChange: func,
  onClick: func,
};

export default Input;
