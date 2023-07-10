import React from "react";
import netflixLogo from "../../assets/netflix-logo.svg";
import langLogo from "../../assets/lang-icon.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={netflixLogo} alt="Netflix-logo" />
      </div>
      <div className="navbar__lang">
        <select name="language" id="language">
          <option value="English">English</option>
          <option value="Russian">Russian</option>
        </select>
      </div>
      <img src={langLogo} alt="" srcset="" />
    </div>
  );
};

export default Navbar;
