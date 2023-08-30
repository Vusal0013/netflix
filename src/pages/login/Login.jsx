import React, { useEffect, useState } from "react";
import { netflixLogo } from "../../assets/logo";
import { loginPgBackground } from "../../assets/img";
import { ArticlePartition, Footer, InputEmail } from "../../components";

import "./login.scss";

import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

import { Link } from "react-router-dom";
import {
  Button,
  Checkbox,
  GooglePrivacy,
  InputPassword,
} from "../../components/form";

import { useTranslation } from "react-i18next";

const Login = () => {
  const { t, i18n } = useTranslation();
  const data = t("translation", { returnObjects: true });

  const initialValues = {
    isPhone: false,
    emailOrPhone: "",
    phonePrefix: "",
    password: "",
    remember: true,
  };

  const validationSchema = Yup.object({
    isPhone: Yup.boolean(),
    emailOrPhone: Yup.string()
      .required(data.loginPage.form.errors.emailPhone.required)
      .when("isPhone", {
        is: false,
        then: (schema) =>
          schema.matches(
            /^\w+@\w+\.\w{2,3}$/,
            data.loginPage.form.errors.emailPhone.validationEmail
          ),
        otherwise: (schema) =>
          schema
            .required(data.loginPage.form.errors.emailPhone.validationPhone)
            .min(9, data.loginPage.form.errors.emailPhone.validationPhone)
            .max(10, data.loginPage.form.errors.emailPhone.validationPhone),
      }),
    phonePrefix: Yup.string().optional(),
    password: Yup.string()
      // .matches(
      //   /.*[A-Za-z].*/,
      //   "Must Contain at Least One Letter (Uppercase or Lowercase)"
      // )
      // .matches(/.*\d.*/, "Must Contain at Least One Number")
      // .matches(
      //   /.*[@$!%*#?&].*/,
      //   "Must Contain at Least One Special Character (@ $ ! % * # ? &)"
      // )
      .min(4, data.loginPage.form.errors.password.required)
      .max(60, data.loginPage.form.errors.password.required)
      .required(data.loginPage.form.errors.password.required),
  });

  return (
    <div className="login-page">
      <div className="login-page__logo">
        <Link to="/">
          <img src={netflixLogo} alt="logo" />
        </Link>
      </div>
      <div className="login-page__container">
        <h1 className="login-page__container__heading">
          {data.loginPage.heading}
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            let userData = {};
            if (values.isPhone) {
              userData.registerOnPhone = true;
              userData.phone = `${values.phonePrefix} ${
                values.emailOrPhone[0] == 0
                  ? values.emailOrPhone.substring(1)
                  : values.emailOrPhone
              }`;
              userData.password = values.password;
            } else {
              userData.registerOnPhone = false;
              userData.email = values.emailOrPhone;
              userData.password = values.password;
            }
            console.log(userData);
            resetForm();
          }}
        >
          {({ values, setFieldValue, resetForm }) => {
            useEffect(() => {
              resetForm();
            }, [i18n.language]);
            return (
              <Form className="login-page__container__login-form">
                <div className="login-page__container__login-form__container-inputs">
                  <InputEmail
                    isPhone={values.isPhone}
                    setFieldValue={setFieldValue}
                    loginPage={true}
                    label={data.loginPage.form.emailPhoneLabel}
                    type="text"
                    name="emailOrPhone"
                    phonePrefix="phonePrefix"
                  />
                  <InputPassword
                    loginPage={true}
                    label={data.loginPage.form.passwordLabel}
                    type="password"
                    name="password"
                  />
                  <Button text={data.loginPage.form.button} />
                  <Checkbox
                    label={data.loginPage.form.checkboxLabel}
                    needHelp={data.loginPage.form.needHelp}
                    type="checkbox"
                    name="remember"
                  />
                </div>
              </Form>
            );
          }}
        </Formik>
        <div className="login-page__container__offer-register">
          <span>{data.loginPage.offerRegister.title}</span>
          <Link
            to="/"
            className="login-page__container__offer-register__signup-link"
          >
            {data.loginPage.offerRegister.titleLink}
          </Link>
          <div className="login-page__container__offer-register__chaptcha-info">
            <GooglePrivacy
              firstText={data.loginPage.captchaInfo.learnMore.firstText}
              secondText={data.loginPage.captchaInfo.learnMore.secondText}
              and={data.loginPage.captchaInfo.learnMore.and}
              privacyPolicy={data.loginPage.captchaInfo.learnMore.privacyPolicy}
              termsOfService={
                data.loginPage.captchaInfo.learnMore.termsOfService
              }
              googleCaptcha={data.loginPage.captchaInfo.title}
              learnMore={data.loginPage.captchaInfo.learnMoreBtn}
            />
          </div>
        </div>
      </div>
      <div className="login-page__bg-image">
        <img src={loginPgBackground} alt="backgroun photo" />
      </div>
      <Footer onlyRequierd={true} />
    </div>
  );
};

export default Login;
