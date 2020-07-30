import React, { useState, useEffect } from 'react';
import { func, string, bool } from 'prop-types';
import classNames from 'classnames';
import './Checkbox.scss';

const Checkbox = ({ type = 'checkbox', value, id, ...props }) => {
  const [checked, setChecked] = useState(value || false);

  const checkboxClass = classNames('checkbox');

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
    <>
      <label htmlFor={id}>
        <input
          type={type}
          className={checkboxClass}
          checked={checked}
          value={value}
          onChange={handleChange}
        />
      </label>
    </>
  );
};
Checkbox.propTypes = {
  type: string,
  id: string,
  value: bool.isRequired,
  onChange: func,
};
export default Checkbox;
