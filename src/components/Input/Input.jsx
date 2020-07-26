import React from "react";
import { func, string } from "prop-types";
import classNames from "classnames";
import "./Input.scss";

// 1. includes 함수 대신 비교 사용하기
// 2. type 주로 사용되는 type 지정하기
// 3. label 필요할때만 받아서 사용하기

const Input = ({ type = "text", name, id, active, value, ...props }) => {
  const inputClass = classNames("input", name && `input--${name}`);

  const labelClass = classNames(
    "label",
    name && `label--${name}`,
    active && "a11y-hidden"
  );

  const handleChange = (e) => {
    const { onChange } = props;

    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <>
      <label htmlFor={id} className={labelClass}>
        <span>{!active && value}</span>
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
  type: string.isRequired,
  onChange: func,
  onClick: func,
};

export default Input;
