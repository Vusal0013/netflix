import React from "react";
import "./main.scss";
import Subscribe from "../subscribe/Subscribe";

const Main = ({ title, paragraph }) => {
  return (
    <div className="main">
      <div className="main__content">
        <h1>{title}</h1>
        <p>{paragraph}</p>
        <Subscribe
          title="Ready to watch? Enter your email to create or restart your membership."
          placeholder="Email adress"
          button="Get Started"
        />
      </div>
      <div className="main__bg-image"></div>
      <div className="main__shadow-cover"></div>
    </div>
  );
};

export default Main;
