import React from "react";
import {
  Navbar,
  Main,
  ArticleImage,
  ArticleVideo,
  FAQ,
  Footer,
} from "../../components";

import { articleDataEng } from "../../assets/data/articleData";

const MainPage = () => {
  return (
    <div style={{ height: "2000px" }}>
      <Navbar signin="Sign in" />
      <Main
        title="Unlimited movies, TV shows, and more"
        paragraph="Watch anywhere. Cancel anytime."
      />
      <ArticleImage
        png={articleDataEng.articles[3].png}
        title={articleDataEng.articles[3].title}
        subtitle={articleDataEng.articles[3].subtitle}
      />
    </div>
  );
};

export default MainPage;
