import React from "react";
import LOGO from "../assests/impfpass_logo.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header__container">
      <div>
        <img src={LOGO} alt="logo" className="header__logo" />
      </div>
      <div className="header__head">
        <h2 className="header__title">Mein elektronischer Impfpass</h2>
        <p className="header__subtitle">Impfungen laut nationalem Impfplan</p>
      </div>
    </div>
  );
};

export default Header;
