import React from "react";
import "./subscribe.scss";

const Subscribe = ({ title, placeholder, button }) => {
  return (
    <div className="subscribe">
      <form className="subscribe__form">
        <p>{title}</p>
        <div className="subscribe__form__container">
          <div className="subscribe__form__email-container">
            <input
              className="subscribe__form__email-container__email"
              type="email"
              name="email"
              id="email"
            />
            <label
              htmlFor="email"
              className="subscribe__form__email-container__email-placeholder"
            >
              {placeholder}
            </label>
          </div>
          <input
            className="subscribe__form__button"
            type="button"
            value={button}
          />
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
