import React, { useState } from "react";
import "./subscribe.scss";

const Subscribe = ({ title, placeholder, button }) => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="subscribe">
      <form className="subscribe__form">
        <h3>{title}</h3>
        <div className="subscribe__form__container">
          <div className="subscribe__form__email-container">
            <input
              className="subscribe__form__email-container__email"
              type="email"
              name="email"
              id="email"
              onChange={(e) => handleEmailChange(e)}
            />
            <label
              htmlFor="email"
              className={`subscribe__form__email-container__email-placeholder ${
                email ? "placeholderTop" : ""
              }`}
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
