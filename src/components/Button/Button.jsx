import React, { useState, useEffect } from 'react';
import PropTypes, { element, string, func } from 'prop-types';
import classNames from 'classnames';
import './Button.scss';

const Button = ({ type = 'button', name, children, onClick }) => {
  const [clicked, setClicked] = useState(false);

  const buttonClass = classNames('button', name && `button--${name}`);

  const handleClick = () => {
    setClicked(!clicked);

    if (onClick) {
      onClick(clicked);
    }
  };

  useEffect(() => {
    if (clicked) {
      setClicked(true);
    }
  }, [clicked]);

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
