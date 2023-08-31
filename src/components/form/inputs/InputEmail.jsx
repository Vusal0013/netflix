import { useField, ErrorMessage } from "formik";
import React, { forwardRef } from "react";

import "./input.scss";
import { Error } from "..";
import classNames from "classnames";
import PhonePrefix from "./PhonePrefix";

const InputEmail = forwardRef(
  (
    { label, type, isPhone, setFieldValue, loginPage, phonePrefix, ...props },
    ref
  ) => {
    const [field, meta, helpers] = useField(props);
    const handleIsPhone = (e) => {
      // eger daxil edilen deyerlerin icinde yalniz reqemdirse
      // basqa dille desek herf yoxdursa demeli user mobil nomre daxil edir
      // Ve bizde buna uygun olaraq Yup validationda ValidationSchemani "isPhone" variable-i ile deyisirik
      // isPhone === false ? email eks halda Phone bolmesinin validationu islemelidir
      if (e.target.value && !e.target.value.match(/[a-zA-Z]/)) {
        setFieldValue("isPhone", true);
      } else {
        setFieldValue("isPhone", false);
      }
    };

    return (
      <>
        <div className="input-container">
          <div style={{ position: "relative" }}>
            <input
              ref={ref}
              className={classNames({
                "input-container__input": true,
                "input-error": meta.touched && meta.error,
              })}
              autoComplete="off"
              type={type}
              id={field.name}
              {...field}
              {...props}
              onKeyUp={(e) => {
                loginPage && handleIsPhone(e);
                field.onBlur;
              }}
            />
            <label
              htmlFor={field.name}
              className={classNames({
                "input-container__label": true,
                "label-top": field.value, // eger inputumuzda value varsa labelimiz yuxari cekilecek eks halda merkezda qalacaq
              })}
            >
              {label}
            </label>
            {isPhone && (
              <PhonePrefix name={phonePrefix} phonePrefix={phonePrefix} />
            )}
          </div>
          <ErrorMessage
            loginPage={loginPage}
            name={field.name}
            component={Error}
          />
        </div>
      </>
    );
  }
);

export default InputEmail;
