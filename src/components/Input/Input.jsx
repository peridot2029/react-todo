import React from 'react';
import { func, string, bool } from 'prop-types';
import classNames from 'classnames';
import './Input.scss';

const Input = ({ type = 'text', label, name, id, active, value, ...props }) => {
  const inputClass = classNames(
    'input',
    name === 'add' && `input--${name}`,
    { 'input__is-readonly': !active && value },
    { 'input--edit': active && value }
  );

  const labelClass = classNames(
    'label',
    name === 'add' && `label--${name}`,
    { 'label__is-readonly': !active && value },
    { 'label--edit': active && value }
  );

  const handleChange = e => {
    const { onChange } = props;

    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <>
      <label htmlFor={id} className={labelClass}>
        {label && <span className='label__input'>{label}</span>}
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
  type: string,
  name: string,
  id: string,
  label: string,
  active: bool,
  value: string.isRequired,
  onChange: func,
};

export default Input;
