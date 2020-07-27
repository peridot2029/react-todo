import React, { useState } from "react";
import PropTypes, { element, string, func } from "prop-types";
import classNames from "classnames";
import "./Button.scss";

const Button = ({ type, name, children, onClick }) => {
  const [isClicked, setClicked] = useState(false);

  const buttonClass = classNames("button", name && `button--${name}`);

  const handleClick = () => {
    setClicked(true);

    if (onClick) {
      onClick(isClicked);
    }
  };

  return (
    <button type={type} className={buttonClass} onClick={handleClick}>
      {children || name}
    </button>
  );
};

Button.propTypes = {
  type: string.isRequired,
  children: PropTypes.oneOfType([element, string]),
  name: string,
  onClick: func,
};

export default Button;
