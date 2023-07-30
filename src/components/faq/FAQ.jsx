import React, { useEffect, useState } from "react";
import { Subscribe, ArticlePartition } from "../";

import "./faq.scss";

import FAQItem from "../faqItem/FAQItem";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const [activeItemId, setActiveItemId] = useState(0);

  const { t } = useTranslation();

  const data = t("translation", { returnObjects: true });

  const handleSetActiveItem = (id) => {
    if (activeItemId === id) {
      setActiveItemId(0);
    } else {
      setActiveItemId(id);
    }
  };
  return (
    <div className="faq">
      <div className="faq__content">
        <h2 className="faq__content__title">{data.faqData.header}</h2>
        <div className="faq__content__faq-items">
          {data.faqData.content.map((item, i) => (
            <FAQItem
              key={i + item.title}
              handleSetActiveItem={handleSetActiveItem}
              activeItemId={activeItemId}
              subTitle={item.subTitle}
              title={item.title}
              id={i + 1}
            />
          ))}
        </div>
        <Subscribe
          title={data.subscribe.title}
          placeholder={data.subscribe.placeholder}
          button={data.subscribe.button}
        />
      </div>
      <ArticlePartition />
    </div>
  );
};

export default FAQ;
