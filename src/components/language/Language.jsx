import React from "react";
import "./language.scss";

const Language = () => {
  return (
    <div className="lang">
      <select name="language" id="language">
        <option value="English">English</option>
        <option value="Russian">Russian</option>
      </select>
    </div>
  );
};

export default Language;
