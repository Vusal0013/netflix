import React from "react";
import netflixLogo from "../../assets/logo/netflix-logo.svg";
import Language from "../language/Language";
import "./navbar.scss";
import "../../sassStyle/custom.scss";

const Navbar = ({ signin }) => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={netflixLogo} alt="Netflix-logo" />
      </div>
      <div className="navbar__lang-container">
        <Language classnameForNavbar="navbar-lang-icon" />
        <button type="button">{signin}</button>
      </div>
    </div>
  );
};

export default Navbar;
