import { useField } from "formik";
import React from "react";

const Checkbox = ({ label, type, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div className="login-page__container__login-form__login-help">
      <input
        className="login-page__container__login-form__login-help__remember"
        type={type}
        id={field.name}
        checked={field.value}
        {...field}
        {...props}
      />
      <label htmlFor={field.name}>{label}</label>
      <a
        className="login-page__container__login-form__login-help__need-help"
        href="https://www.netflix.com/az/LoginHelp"
      >
        Need help?
      </a>
    </div>
  );
};

export default Checkbox;
