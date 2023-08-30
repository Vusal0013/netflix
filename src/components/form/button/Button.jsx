import React, { useEffect } from "react";
import "./button.scss";
import classNames from "classnames";

const Button = ({ text, values, errors, inputRef, subscribe }) => {
  const handleFocusInput = () => {
    if (subscribe && (!values?.email || errors?.email))
      inputRef?.current?.focus();
  };

  return (
    <button
      onClick={handleFocusInput}
      className={classNames({
        button: true,
        subscribe: subscribe,
      })}
      type="submit"
    >
      {text}
    </button>
  );
};

export default Button;
