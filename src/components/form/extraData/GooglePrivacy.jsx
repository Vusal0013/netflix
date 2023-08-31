import classNames from "classnames";
import { useState } from "react";

const GooglePrivacy = ({
  firstText,
  secondText,
  and,
  privacyPolicy,
  termsOfService,
  googleCaptcha,
  learnMore,
}) => {
  const [isOpenLearnMore, setIsOpenLearnMore] = useState(false);

  return (
    <>
      <p>
        {googleCaptcha}{" "}
        <span
          onClick={() => setIsOpenLearnMore(true)}
          className={classNames({
            "login-page__container__offer-register__chaptcha-info__learn-more": true,
            hidden: isOpenLearnMore,
          })}
        >
          {learnMore}
        </span>
      </p>
      <p className={classNames({ "last-child-visible": isOpenLearnMore })}>
        {firstText}{" "}
        <a href="https://policies.google.com/privacy">{privacyPolicy}</a> {and}{" "}
        <a href="https://policies.google.com/terms">{termsOfService}</a>{" "}
        {secondText}
      </p>
    </>
  );
};

export default GooglePrivacy;
