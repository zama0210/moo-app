import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import mamamooLogo from "../Assets/mamamoo-full-logo.png";
import "../Styles/header.css";

const Header = () => {
  const [floating, setFloating] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setFloating(true);
      } else {
        setFloating(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={classNames("header", { "header--float": floating })}>
      <img
        className="header__mamamoo-logo"
        src={mamamooLogo}
        alt="MAMAMOO logo"
      />
      <ul className="header__nav">
        <li className="header__nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="header__nav-item">
          <Link to="/styleguide">Styleguide</Link>
        </li>
        <li className="header__nav-item">
          <Link to="/wireframes">Wireframes</Link>
        </li>
        <li className="header__nav-item">
          <Link to="/essay">Essay</Link>
        </li>
        <li className="header__nav-item">
          <Link to="/art">Art</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
