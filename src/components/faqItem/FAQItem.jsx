import React, { useState } from "react";
import "./faqItem.scss";

const FAQItem = ({ title, subTitle }) => {
  const [active, setActive] = useState(false);

  const handleSetActive = () => {
    setActive(!active);
  };

  return (
    <div className="faq-item">
      <div onClick={handleSetActive} className="faq-item__heading">
        <span className="faq-item__heading__title">{title}</span>
        <span className={`faq-item__heading__icon ${active && "show"}`}>+</span>
      </div>
      <div className={`faq-item__content ${active && "show"}`}>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};

export default FAQItem;
