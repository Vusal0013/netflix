import { useField } from "formik";
import React from "react";
import { ImCheckmark } from "react-icons/im";
import "./checkbox.scss";

const Checkbox = ({ label, type, needHelp, ...props }) => {
  const [field, meta, helpers] = useField(props);

  // console.log({ field, meta, helpers });
  return (
    <div className="checkbox-container">
      <label
        onClick={() => helpers.setValue(!field.value)}
        className="checkbox-container__label"
        htmlFor={field.name}
      >
        <input
          className="checkbox-container__label__input"
          {...field}
          {...props}
          id={field.name}
          type="checkbox"
        />
        <div className="checkbox-container__label__checkbox">
          {field.value && <ImCheckmark color="#000" />}
        </div>
        <span className="checkbox-container__label__text">{label}</span>
      </label>
      <a
        className="checkbox-container__need-help"
        href="https://www.netflix.com/az/LoginHelp"
      >
        {needHelp}
      </a>
    </div>
  );
};

export default Checkbox;
