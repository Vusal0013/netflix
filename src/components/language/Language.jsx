import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../features/language/languageSlice";
import { useTranslation } from "react-i18next";
import { langIcon } from "../../assets/logo";
import classNames from "classnames";
import "./language.scss";

const Language = ({ classnameForNavbar }) => {
  const language = useSelector((state) => state.language.activeLanguage);
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  useEffect(() => {
    const handleOnloadDefaultLanguage = () => {
      dispatch(changeLanguage(i18n.language));
    };
    window.addEventListener("load", handleOnloadDefaultLanguage);

    return window.removeEventListener("load", handleOnloadDefaultLanguage);
  }, []);

  const handleSetLanguage = async (e) => {
    dispatch(changeLanguage(e.target.value));
    await i18n.changeLanguage(e.target.value);
  };

  return (
    <div
      className={classNames({
        lang: true,
        "navbar-lang-icon": classnameForNavbar,
      })}
    >
      <img className="lang__svg" src={langIcon} />
      <select
        value={language}
        onChange={(e) => handleSetLanguage(e)}
        name="language"
        id="language"
      >
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </select>
    </div>
  );
};

export default Language;
