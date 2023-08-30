import { useField, ErrorMessage } from "formik";
import React, { forwardRef, useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import "./input.scss";
import { Error } from "../";
import classNames from "classnames";

const InputPassword = forwardRef(
  ({ label, type, isPhone, setFieldValue, loginPage, ...props }, ref) => {
    const [field, meta, helpers] = useField(props);

    const [showPassword, setShowPassword] = useState(false); // type password olanda Paasswordu gormek ucun

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
              type={showPassword ? "text" : type}
              // eger Inputun type passworddursa showPassword deyishenine baxir eger true dursa  text deyilse tipini password teyin edir
              // eger tip umimiyyetle "password" deyilse type oldugu kimi saxlayir
              id={field.name}
              {...field}
              {...props}
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
            {field.value && (
              // eger type passworddursa ve inputun valuesi varsa
              // inputun sonunda icon render olur
              // iconda oz novbesinde showPAssword hooku falsadirsa bagli goz yox eger
              // type textdirse acig goz render edir
              <div
                className="password-visibility"
                onClick={() => setShowPassword((val) => !val)}
              >
                {showPassword ? (
                  <AiOutlineEye size={24} />
                ) : (
                  <AiOutlineEyeInvisible size={24} />
                )}
              </div>
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

export default InputPassword;
