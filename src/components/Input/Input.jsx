import React from "react";
import classNames from "classnames";
import "./Input.scss";

const Input = ({ name, value, ...props }) => {
  const inputClass = classNames("input", name && `input-${name}`);

  const labelClass = classNames("label", name && `label-${name}`);

  const handleChange = (e) => {
    const { onChange } = props;

    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <label className={labelClass}>
      <input
        type="text"
        className={inputClass}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
};

export default Input;
