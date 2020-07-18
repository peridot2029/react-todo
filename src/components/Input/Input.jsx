import React, { useState } from "react";
import classNames from "classnames";
import "./Input.scss";

const Input = ({ className, item, ...props }) => {
  const [value, setValue] = useState("");
  const [content, setContent] = useState("");

  const inputClass = classNames(
    "input",
    className && `input-${className}`,
    item && "input-edit"
  );

  const labelClass = classNames(
    "label",
    className === "add" && `label-${className}`,
    item && "label-edit"
  );

  const handleChange = (e) => {
    setValue(e.target.value);

    const { onChange, editChange } = props;
    console.log(editChange);

    if (onChange) {
      onChange(e.target.value);
    } else if (editChange) {
      console.log("!");
    }
  };

  return (
    <label className={labelClass}>
      <input
        type="text"
        className={inputClass}
        value={value || item}
        onChange={handleChange}
      />
    </label>
  );
};

export default Input;
