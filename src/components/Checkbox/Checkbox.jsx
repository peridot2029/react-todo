import React, { useState } from "react";
import { func, string } from "prop-types";
import classNames from "classnames";
import "./Checkbox.scss";

const Checkbox = ({ ...props }) => {
  const { item, onClick, edit } = props;
  const [value, setValue] = useState("");

  const checkboxClass = classNames("checkbox");
  const labelClass = classNames("label", edit && "a11y-hidden");

  const handleClick = (e) => {
    setValue(e.target.value);

    if (onClick) {
      onClick(e.target.value);
    }
  };

  return (
    <label className={labelClass}>
      {!edit ? item.content : ""}
      <input
        type="checkbox"
        className={checkboxClass}
        value={item.isCompleted}
        onClick={handleClick}
      />
    </label>
  );
};
Checkbox.propTypes = {
  type: string,
  onClick: func,
};
export default Checkbox;
