import React, { useEffect, useRef } from "react";
import "./subscribe.scss";
import { Button, InputEmail } from "../form";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

const Subscribe = () => {
  const inputRef = useRef(null);

  const { t, i18n } = useTranslation();

  const data = t("translation", { returnObjects: true });

  const initialValue = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(/^\w+@\w+\.\w{2,3}$/, data.subscribe.form.errors.validation)
      .required(data.subscribe.form.errors.required),
  });

  return (
    <div className="subscribe">
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          console.log(values);
        }}
      >
        {({ values, handleSubmit, errors, resetForm }) => {
          useEffect(() => {
            resetForm();
          }, [i18n.language]);

          return (
            <Form className="subscribe__form">
              <h3>{data.subscribe.title}</h3>
              <div className="subscribe__form__container">
                <InputEmail
                  ref={inputRef}
                  label={data.subscribe.form.placeholder}
                  name="email"
                  type="email"
                />
                <Button
                  subscribe={true}
                  errors={errors}
                  values={values}
                  inputRef={inputRef}
                  text={data.subscribe.form.button}
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Subscribe;
