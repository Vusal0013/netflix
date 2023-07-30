import React from "react";
import "./footer.scss";
import { Language } from "../";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const data = t("translation", { returnObjects: true });

  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container__heading">
          <a href={data.footerData.footerHeading.link}>
            {data.footerData.footerHeading.title}
          </a>
        </div>
        <div className="footer__container__content">
          <ul className="footer__container__content__list">
            {data.footerData.footerContent.map((item, i) => (
              <li key={i} className="footer__container__content__list__item">
                <a key={i} href={item.link}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Language />
        <p className="copyright">{data.footerData.copyrigth}</p>
      </div>
    </div>
  );
};

export default Footer;
