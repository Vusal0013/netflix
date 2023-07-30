import React, { useState } from "react";
import "./language.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../features/language/languageSlice";
import { useTranslation } from "react-i18next";

const Language = ({ classnameForNavbar }) => {
  const language = useSelector((state) => state.language.activeLanguage);
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  window.onload = () => {
    dispatch(changeLanguage(i18n.language));
  };

  const handleSetLanguage = async (e) => {
    dispatch(changeLanguage(e.target.value));
    await i18n.changeLanguage(e.target.value);
  };

  return (
    <div
      className={`lang${classnameForNavbar ? ` ${classnameForNavbar}` : ""}`}
    >
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
