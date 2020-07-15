import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "./../Button/Button";
import "./Form.scss";

const Form = ({ addToDoItem }) => {
  const [content, setContent] = useState("");
  // 추가 input 값 비워주기, 오류개선
  const handleSumit = (e) => {
    e.preventDefault();

    if (content === "") {
    } else {
      addToDoItem(content);
      setContent("");
    }
  };

  const handleAddInput = (value) => {
    setContent(value);
  };

  return (
    <form className="add-form" onSubmit={handleSumit}>
      <Input className="add" onChange={handleAddInput} />
      <Button type="submit" name="add" />
    </form>
  );
};
export default Form;
