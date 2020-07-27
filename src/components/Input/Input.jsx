import React from "react";
import { func, string } from "prop-types";
import classNames from "classnames";
import "./Input.scss";

// 1. includes 함수 대신 비교 사용하기
// 2. type 주로 사용되는 type 지정하기
// 3. label 필요할때만 받아서 사용하기

const Input = ({ type = "text", name, id, active, label, value, ...props }) => {
  const inputClass = classNames("input", name && `input--${name}`, {
    "input__is-readonly": !active && value,
  });

  const labelClass = classNames(
    "label",
    name && `label--${name}`,
    { "label__is-readonly": !active && value },
    active && "a11y-hidden"
  );
  console.log("active", active);

  const handleChange = (e) => {
    const { onChange } = props;

    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <>
      <label htmlFor={id} className={labelClass}>
        {/* {label && <span className="input__label"></span>} */}
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
};

export default Input;
