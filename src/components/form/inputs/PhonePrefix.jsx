import React, { useEffect, useRef, useState } from "react";

import CountryList from "country-list-with-dial-code-and-flag";
import CountryFlagSvg from "country-list-with-dial-code-and-flag/dist/flag-svg";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

import axios from "axios";
import classNames from "classnames";
import { useField } from "formik";

const PhonePrefix = (props) => {
  const [field, meta, helpers] = useField(props);

  const prefixButtonRef = useRef(null);
  const prefixListRef = useRef(null);

  const [prefixValues, setPrefixValues] = useState({
    isOpenPrefixList: false, // PrefixList gosterib gizletmek ucun
    prefix: null,
    flag: null,
  }); // dial code (prefix), PrefixList ve bayraqlarin saxlanilmasi deyismesi ucun useState

  const handleSetPrefixValues = (dialCode) => {
    let countryFlag =
      CountryFlagSvg[CountryList.findByDialCode(dialCode)[0].data.code];
    setPrefixValues((prevValues) => ({
      ...prevValues,
      flag: countryFlag,
      prefix: dialCode,
    }));
    helpers.setValue(dialCode);
  };

  useEffect(() => {
    const clickPrefixOutside = (e) => {
      if (
        !(
          prefixButtonRef.current.contains(e.target) ||
          prefixListRef.current.contains(e.target)
        )
      ) {
        setPrefixValues((prevValues) => ({
          ...prevValues,
          isOpenPrefixList: false,
        }));
      }
    };

    document.addEventListener("mousedown", clickPrefixOutside);
    return () => {
      document.removeEventListener("mousedown", clickPrefixOutside);
    };
  }, []);

  useEffect(() => {
    // Component ilk yuklenende "https://ipapi.co/json/" apisi ile userin oldugu olkenin datasini tapir ve dial codeu deyisenimizde saxlayir
    // Eger user telefon nomresi daxil etmek isteyerse prefix onceden mueyyen edilmis olur
    axios.get("https://ipapi.co/json/").then((response) => {
      let dialCode = response.data.country_calling_code;
      handleSetPrefixValues(dialCode);
    });
  }, []);

  return (
    <>
      <div
        ref={prefixButtonRef}
        onClick={() =>
          setPrefixValues((prevValues) => ({
            ...prevValues,
            isOpenPrefixList: !prevValues.isOpenPrefixList,
          }))
        }
        className="phone-prefix"
      >
        <div className="phone-prefix__prefix-container">
          <div
            className="phone-prefix__country-flag"
            dangerouslySetInnerHTML={{ __html: prefixValues.flag }}
          />
          <span>{prefixValues.prefix}</span>
          {prefixValues.isOpenPrefixList ? (
            <AiFillCaretUp />
          ) : (
            <AiFillCaretDown />
          )}
        </div>
      </div>
      <ul
        ref={prefixListRef}
        className={classNames({
          "phone-prefix__list": true,
          hidden: !prefixValues.isOpenPrefixList,
        })}
        id="phone-prefix"
      >
        {CountryList.getAll().map((value, key) => (
          <li
            className={classNames({
              selected: prefixValues.prefix === value.data.dial_code,
            })}
            onClick={() => {
              setPrefixValues((prevValues) => ({
                ...prevValues,
                isOpenPrefixList: false,
              }));
              handleSetPrefixValues(value.data.dial_code);
            }}
            value={value.data.name}
            key={value.data.name + value.data.dial_code + key}
          >
            {`${value.data.name} ${value.data.dial_code}`}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PhonePrefix;
