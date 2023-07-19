import React from "react";
import {
  Navbar,
  Main,
  ArticleImage,
  ArticleVideo,
  FAQ,
  Footer,
} from "../../components";

const MainPage = () => {
  return (
    <div style={{ height: "2000px" }}>
      <Navbar signin="Sign in" />
      <Main
        title="Unlimited movies, TV shows, and more"
        paragraph="Watch anywhere. Cancel anytime."
      />
    </div>
  );
};

export default MainPage;
