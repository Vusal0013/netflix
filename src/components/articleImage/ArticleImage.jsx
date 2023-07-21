import React from "react";
import "./ArticleImage.scss";

const ArticleImage = ({ title, subtitle, png, ...props }) => {
  console.log(props);
  return (
    <div className="article-image">
      <div className="article-image__title-container">
        <h1 className="article-image__title-container__title">{title}</h1>
        <p className="article-image__title-container__subtitle">{subtitle}</p>
      </div>

      <div className="article-image__image-container">
        <img
          className="article-image__image-container__image"
          src={png}
          alt="Article-photo"
        />

        {Object.keys(props).length ? (
          <div className="article-image__image-container__download-container">
            <div className="article-image__image-container__download-container__image-container">
              <img
                src={props?.downloadingPng}
                className="article-image__image-container__download-container__image-container__image"
              />
            </div>
            <div className="article-image__image-container__download-container__title-container">
              <div className="article-image__image-container__download-container__title-container__title">
                {props?.title}
              </div>
              <div className="article-image__image-container__download-container__title-container__subtitle">
                {props?.subtitle}
              </div>
            </div>
            <div className="article-image__image-container__download-container__download-png"></div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ArticleImage;
