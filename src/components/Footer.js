import React from "react";
import { BsChevronDown } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <p className="footer__text">Zusätzliche Informationen</p>
      <button className="footer__btn">
        <BsChevronDown color="white" />
      </button>
    </div>
  );
};

export default Footer;
