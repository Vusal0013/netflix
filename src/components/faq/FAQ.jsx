import React from "react";
import "./faq.scss";
import { faqData } from "../../assets/data";

import FAQItem from "../faqItem/FAQItem";
const FAQ = () => {
  return (
    <div className="faq">
      <div className="faq__content">
        <h2 className="faq__content__title">Frequently Asked Questions</h2>
        <div className="faq__content__faq-items">
          {faqData.map((item, i) => (
            <FAQItem subTitle={item.subTitle} title={item.title} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
