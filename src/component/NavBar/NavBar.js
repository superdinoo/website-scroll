import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";
import Logo from "../../img/logo.PNG";
import Hero from "../Hero/Hero";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [about, setAbout] = useState(false);

  const handleAbout = () => {
    setAbout(!about);
  };

  const handleClick = () => setClick(!click);
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <ul className={click ? "navMenu active" : "navMenu"}>
        <li className="navItems">
          <a href="/">Home</a>
        </li>
        <div className="about" onClick={handleAbout}>
          {about ? <Hero /> : false}

          <a href="<Hero />">About</a>
        </div>
        <li className="navItems">
          <a href="/">FAQ</a>
        </li>
        <li className="navItems">
          <a href="/">Contacts</a>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {" "}
        {click ? (
          <FaTimes size={30} style={{ color: "#f8f8f8" }} />
        ) : (
          <FaBars size={30} style={{ color: "#f8f8f8" }} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
