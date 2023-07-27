import React from "react";
import { ArticlePartition } from "../";

import "./ArticleImage.scss";

const ArticleImage = ({
  title,
  subtitle,
  png,
  video,
  downloadBar,
  customClassNameForVideo,
}) => {
  if (video) {
    return (
      <div className="article">
        <div className="article__content">
          <div className="article__content__title-container">
            <h2 className="article__content__title-container__title">
              {title}
            </h2>
            <p className="article__content__title-container__subtitle">
              {subtitle}
            </p>
          </div>

          <div className="article__content__image-container">
            <img
              className="article__content__image-container__image"
              src={png}
              alt="Article-photo"
            />
            <div
              className={`article__content__image-container__${
                customClassNameForVideo ? customClassNameForVideo : "video"
              }`}
            >
              <video
                src={video}
                type="video/m4v"
                autoPlay
                muted
                loop
                playsInline
              ></video>
            </div>
          </div>
        </div>
        <ArticlePartition />
      </div>
    );
  } else {
    return (
      <div className="article">
        <div className="article__content photo">
          <div className="article__content__title-container">
            <h2 className="article__content__title-container__title">
              {title}
            </h2>
            <p className="article__content__title-container__subtitle">
              {subtitle}
            </p>
          </div>

          <div className="article__content__image-container">
            <img
              className="article__content__image-container__image"
              src={png}
              alt="Article-photo"
            />

            {downloadBar && (
              <div className="article__content__image-container__download-container">
                <div className="article__content__image-container__download-container__image-container">
                  <img
                    src={downloadBar?.png}
                    className="article__content__image-container__download-container__image-container__image"
                  />
                </div>
                <div className="article__content__image-container__download-container__title-container">
                  <div className="article__content__image-container__download-container__title-container__title">
                    {downloadBar?.title}
                  </div>
                  <div className="article__content__image-container__download-container__title-container__subtitle">
                    {downloadBar?.subtitle}
                  </div>
                </div>
                <div className="article__content__image-container__download-container__download-png">
                  <img src={downloadBar?.gif} alt="gif-animation" />
                </div>
              </div>
            )}
          </div>
        </div>
        <ArticlePartition />
      </div>
    );
  }
};

export default ArticleImage;
