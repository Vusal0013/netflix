import React, { useState } from "react";

import "./faqItem.scss";

const FAQItem = ({
  handleSetActiveItem,
  activeItemId,
  title,
  subTitle,
  id,
}) => {
  return (
    <div className="faq-item">
      <div
        onClick={() => handleSetActiveItem(id)}
        className="faq-item__heading"
      >
        <span className="faq-item__heading__title">{title}</span>
        <span
          className={`faq-item__heading__icon ${activeItemId === id && "show"}`}
        >
          +
        </span>
      </div>
      <div className={`faq-item__content ${activeItemId === id && "show"}`}>
        {subTitle.map((item, i) => (
          <p key={i + item}>
            {0 < i ? (
              <>
                {" "}
                <br /> {item}
              </>
            ) : (
              item
            )}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FAQItem;
