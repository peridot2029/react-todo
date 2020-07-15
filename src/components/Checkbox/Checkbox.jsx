import React, { useState } from "react";
import { func, string } from "prop-types";
import classNames from "classnames";
import "./Checkbox.scss";

const Checkbox = ({ ...props }) => {
  const { item, onClick } = props;
  const [value, setValue] = useState("");
  const checkboxClass = classNames("checkbox");

  const handleClick = (e) => {
    setValue(e.target.value);

    if (onClick) {
      onClick(e.target.value);
    }
  };

  return (
    <label>
      {item.content}
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
