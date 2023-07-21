import React from "react";
import "./main.scss";
import Subscribe from "../subscribe/Subscribe";
import mainBackground from "../../assets/img/main-background.jpg";
import ArticlePartition from "../articlePartition/ArticlePartition";

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
      <div className="main__bg-image">
        <img
          className="main__bg-image__background-image"
          src={mainBackground}
          alt="background-image"
        />
      </div>
      <div className="main__shadow-cover"></div>

      <ArticlePartition />
    </div>
  );
};

export default Main;
