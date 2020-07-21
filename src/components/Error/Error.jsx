import React from "react";
import classNames from "classnames";
import "./Error.scss";

const Error = ({ name }) => {
  const ErrorClass = classNames("error", name && "is-error");

  return <div className={ErrorClass} />;
};
export default Error;
