import React, { useState } from "react";
import PropTypes, { string, func } from "prop-types";
import classNames from "classnames";
import "./Input.scss";
/**
 * 1. item add
 * lable htmlfor - addInput, input ID - add Input
 *
 * <label for="addInput" class="a11y-hidden">할 일 추가</label>
 * <input id="addInput" type="text" class="add-input" />
 *----------------------------------------------------------------
 * 2. incomplete add
 *
 * <input id="" type="checkbox" />
 * <label for="">test~~</label>
 *-----------------------------------------------------------------
 * 3. edit item
 *
 * <input id="" type="checkbox" />
 * <label for="" class="a11y-hidden">test~~</label>
 *
 * <label for="" class="a11y-hidden">수정~~~</label>
 * <input id="" type="text" value="test~~~~~" />
 *
 *
 */
const Input = (props) => {
  const { type, id, className, name, children, onChange } = props;
  const [value, setValue] = useState("");
  const inputClass = classNames("input");
  const labelClass = classNames("lable", id && "a11y-hidden");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  console.group("%c ----- INPUT COMPONENT ------", `color : #008080`);
  console.log(`lableClass : ${labelClass}`);
  console.log(`inputClass : ${inputClass}`);
  console.groupEnd("%c ----- INPUT COMPONENT ------", `color : #008080`);
  return (
    <>
      <label htmlFor={id} className={labelClass}>
        {children}
      </label>
      <input
        type={type}
        id={id}
        className={inputClass}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};
Input.propTypes = {
  type: string.isRequired,
  name: string,
  onChange: func,
};
export default Input;
