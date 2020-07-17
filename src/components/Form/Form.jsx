import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "./../Button/Button";
import "./Form.scss";
import Error from "./../Error/Error";

const Form = ({ addToDoItem }) => {
  const [content, setContent] = useState("");
  const [errorValue, setErrorValue] = useState(false);

  const handleSumit = (e) => {
    e.preventDefault();
    if (content === "") {
      setErrorValue(true);
    } else {
      addToDoItem(content);
      setErrorValue(false);
      setContent("");
    }
  };

  const handleAddInput = (value) => {
    setContent(value);
  };

  return (
    <form className="add-form" onSubmit={handleSumit}>
      <div>
        <Input className="add" onChange={handleAddInput} />
        <Button type="submit" name="add" />
      </div>
      <Error className={errorValue ? "is-error" : "error"} />
    </form>
  );
};
export default Form;
