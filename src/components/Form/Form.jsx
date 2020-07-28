import React, { useState } from "react";
import Input from "./../Input/Input";
import Button from "./../Button/Button";
import Error from "./../Error/Error";
import "./Form.scss";

const Form = ({ addTodoDate }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value === "") {
      setError(true);
    } else {
      addTodoDate(value);

      setError(false);
      setValue("");
    }
  };

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="add-form__input-wrapper">
        <Input type="text" name="add" value={value} onChange={handleChange} />

        <Button type="submit" name="add" />

        <Error name={error} />
      </div>
    </form>
  );
};

export default Form;
