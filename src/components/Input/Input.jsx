import React, { useState } from "react";
import PropTypes, { string, func, element } from "prop-types";
import classNames from "classnames";
import "./Input.scss";

const Input = ({ className, ...props }) => {
  const [value, setValue] = useState("");

  const inputClass = classNames("input", className && `input-${className}`);

  const handleChange = (e) => {
    setValue(e.target.value);

    const { onChange } = props;

    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <label className="lable">
      <input
        type="text"
        className={inputClass}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
};

Input.propTypes = {
  children: PropTypes.oneOfType([element, string]),
  onChange: func,
};
export default Input;
