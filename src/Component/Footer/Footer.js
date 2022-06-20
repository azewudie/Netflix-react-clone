import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer-wrapper">
      <p>Questions? call 1-844-505-2993</p>
      <div className="footer-internal-wrapper">
        <ul className="footer-list">
          <li>
            <a href="#">FAQ </a>
          </li>
          <li>
            <a href="#">Help Center </a>
          </li>
          <li>
            <a href="#">Account </a>
          </li>
          <li>
            <a href="#">Media Center </a>
          </li>
          <li>
            <a href="#"> Investor Relations </a>
          </li>
          <li>
            <a href="#"> Jobs </a>
          </li>
          <li>
            <a href="#">Redeem Gift Card </a>
          </li>
          <li>
            <a href="#">Buy Gift Cards </a>
          </li>
          <li>
            <a href="#">Ways To Watch </a>
          </li>
          <li>
            <a href="#"> Terms of Use </a>
          </li>
          <li>
            <a href="#"> Privacy</a>
          </li>
          <li>
            <a href="#">Cookie Performance </a>
          </li>
          <li>
            <a href="#"> Corporate Information </a>
          </li>
          <li>
            <a href="#"> Contact Us </a>
          </li>
          <li>
            <a href="#"> Speed Test</a>
          </li>
          <li>
            <a href="#">Legal Notices </a>
          </li>
          <li>
            <a hrf="#"> Only on Netflix</a>
          </li>
        </ul>
      </div>
      <div className="footerOption">
        <select>
          <option>English</option>
          <option>Spanish</option>
        </select>
      </div>
    </div>
  );
};

export default Footer;
