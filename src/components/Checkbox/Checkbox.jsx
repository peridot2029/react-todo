import React from "react";
import classNames from "classnames";
import "./Checkbox.scss";
const Checkbox = (props) => {
  const { type } = props;
  const checkboxClass = classNames("checkbox");

  return (
    <label>
      <input className={checkboxClass} type={type} />
    </label>
  );
};
Checkbox.propTypes = {
  type: "checkbox",
};
export default Checkbox;
