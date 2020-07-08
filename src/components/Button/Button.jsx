import React from "react";
import PropTypes, { oneOf, element, string, func } from "prop-types";
import classNames from "classnames";
import "./Button.scss";
const Button = (props) => {
  const { type, className, name, onClick, children } = props;
  const buttonClass = classNames("button", name && `${name}-button`);

  const handleClick = () => {};
  console.group("%c ----- BUTTON COMPONENT ------", `color : #00FF66`);
  console.log(`buttonClass : ${buttonClass}`);
  console.groupEnd("%c ----- BUTTON COMPONENT ------", `color : #00FF66`);
  return (
    <button type={type} className={buttonClass} onClick={handleClick}>
      {children || name}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset", null]),
  children: PropTypes.oneOfType([element, string]),
  onClick: func,
};
export default Button;
