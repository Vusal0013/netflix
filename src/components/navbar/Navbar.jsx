import React from "react";
import netflixLogo from "../../assets/logo/netflix-logo.svg";
import langLogo from "../../assets/logo/lang-icon.svg";
import "./navbar.scss";
import "../../sassStyle/custom.scss";

const Navbar = ({ signin }) => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={netflixLogo} alt="Netflix-logo" />
      </div>
      <div className="navbar__lang-container">
        <div className="navbar__lang">
          <select name="language" id="language">
            <option value="English">English</option>
            <option value="Russian">Russian</option>
          </select>
        </div>
        <button type="button">{signin}</button>
      </div>
    </div>
  );
};

export default Navbar;
