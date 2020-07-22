import React from "react";
import { func, string } from "prop-types";
import classNames from "classnames";
import "./Input.scss";

const Input = ({ name, type, value, onEdit, ...props }) => {
  const inputClass = classNames(
    "input",
    type && `input-${type}`,
    name && `input-${name}`
  );
  const labelClass = classNames(
    "label",
    name && `label-${name}`,
    onEdit && "a11y-hidden"
  );

  const handleChange = (e) => {
    const { onChange } = props;

    onChange && onChange(e.target.value);
  };

  const handleClick = (e) => {
    const { onClick } = props;
    onClick && onClick(e.target.value);
  };

  return (
    <label className={labelClass}>
      <input
        type={type}
        className={inputClass}
        value={value}
        onChange={handleChange}
        onClick={handleClick}
      />
    </label>
  );
};

Input.propTypes = {
  type: string,
  className: string,
  onChange: func,
  onClick: func,
};

export default Input;
