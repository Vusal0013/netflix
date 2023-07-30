import React from "react";
import { Navbar, Main, Article, FAQ, Footer } from "../../components";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation();
  const data = t("translation", { returnObjects: true });

  return (
    <div key={"MainPage"}>
      <Navbar signin={data.main.navbar.login} />
      <Main title={data.main.title} paragraph={data.main.subtitle} />

      {data.articles.map((item, i) => (
        <Article
          png={item.png}
          title={item.title}
          subtitle={item.subtitle}
          video={item.video}
          downloadBar={item.downloadBar}
          key={i + 1}
          customClassNameForVideo={item.customClassNameForVideo}
        />
      ))}
      <FAQ />
      <Footer />
    </div>
  );
};

export default MainPage;
