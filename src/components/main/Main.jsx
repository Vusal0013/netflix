import React from "react";
import "./main.scss";
import Subscribe from "../subscribe/Subscribe";
import mainBackground from "../../assets/img/main-background.jpg";
import ArticlePartition from "../articlePartition/ArticlePartition";
import { useTranslation } from "react-i18next";

const Main = ({ title, paragraph }) => {
  const { t } = useTranslation();
  const data = t("translation", { returnObjects: true });
  return (
    <div className="main">
      <div className="main__content">
        <h1>{title}</h1>
        <p>{paragraph}</p>
        <Subscribe
          title={data.subscribe.title}
          placeholder={data.subscribe.placeholder}
          button={data.subscribe.button}
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
