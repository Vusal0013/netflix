import { VscError } from "react-icons/vsc";

import "./error.scss";
import React from "react";

const ErrorSubscribe = ({ children, loginPage }) => {
  return (
    <div className="error-input">
      {!loginPage && <VscError size={20} />}
      <small>{children}</small>
    </div>
  );
};

export default ErrorSubscribe;
