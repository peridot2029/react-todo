import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "./Checkbox.scss";

const Checkbox = ({ type, id, ...props }) => {
  const [checked, setChecked] = useState(false);

  const checkboxClass = classNames("checkbox");
  console.log(checkboxClass);

  const handleChange = (e) => {
    const { onChange } = props;

    setChecked(!checked);

    if (onChange) {
      onChange(e.target.checked);
    }
  };

  useEffect(() => {
    if (checked) {
      setChecked(true);
    }
  }, [checked]);

  return (
    <label htmlFor={id}>
      <input
        type={type}
        className={checkboxClass}
        checked={checked}
        onChange={handleChange}
      />
    </label>
  );
};
export default Checkbox;
