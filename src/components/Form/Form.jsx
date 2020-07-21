import React, { useState } from "react";
import Input from "./../Input/Input";
import Button from "./../Button/Button";
import Error from "./../Error/Error";
import "./Form.scss";

const Form = ({ addToDoItem }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value === "") {
      setError(true);
    } else {
      addToDoItem(value);
      setError(false);
      setValue("");
    }
  };

  const addToDoInput = (value) => {
    setValue(value);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div>
        <Input name="add" value={value} onChange={addToDoInput} />
        <Button type="submit" name="add" />
      </div>
      <Error name={error} />
    </form>
  );
};
export default Form;
