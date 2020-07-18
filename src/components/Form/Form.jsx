import React, { useState } from "react";
import classNames from "classnames";
import Input from "../Input/Input";
import Button from "./../Button/Button";
import Error from "./../Error/Error";
import "./Form.scss";

const Form = ({ addToDoItem }) => {
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content === "") {
      setError(true);
    } else {
      addToDoItem(content);
      setContent("");
      setError(false);
    }
  };

  const handleAddInput = (value) => {
    setContent(value);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div>
        <Input className="add" onChange={handleAddInput} />
        <Button type="submit" name="add" />
      </div>
      <Error className={classNames("error", error && "is-error")} />
    </form>
  );
};
export default Form;
