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
    <div key={"MainPage"}>
      <Navbar signin="Sign in" />
      <Main
        title="Unlimited movies, TV shows, and more"
        paragraph="Watch anywhere. Cancel anytime."
      />

      {articleDataEng.articles.map((item, i) => (
        <ArticleImage
          png={item.png}
          title={item.title}
          subtitle={item.subtitle}
          video={item.video}
          downloadBar={item.downloadBar}
          key={i + 1}
          customClassNameForVideo={item.customClassNameForVideo}
        />
      ))}
    </div>
  );
};

export default MainPage;
