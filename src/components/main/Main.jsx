import React from "react";
import "./main.scss";

const Main = ({ title, paragraph }) => {
  return (
    <div className="main">
      <div className="main__content">
        <h1>{title}</h1>
        <p>{paragraph}</p>
      </div>
      <div className="main__shadow-cover"></div>
    </div>
  );
};

export default Main;
