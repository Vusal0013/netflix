import React from "react";
import netflixLogo from "../../assets/logo/netflix-logo.svg";
import Language from "../language/Language";
import "./navbar.scss";
import "../../sassStyle/custom.scss";
import { Link } from "react-router-dom";

const Navbar = ({ signin }) => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={netflixLogo} alt="Netflix-logo" />
      </div>
      <div className="navbar__lang-container">
        <Language classnameForNavbar={true} />
        <Link className="navbar__lang-container__button-container" to="/login">
          <button type="button">{signin}</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
