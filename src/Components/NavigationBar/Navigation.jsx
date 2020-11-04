import React from "react";

import Menu from "./Menu";
import { links } from "./linksData";
import Logo from "../../logo.svg";
import { Button } from "../ReusableComponents";
import Hamburger from "./Hamburger";

const NavigationMobile = () => (
  <span
    className="menu menu--mobile hide-for-desktop flex-dir-c"
    onAnimationEnd={(event) => {
      event.target.classList.remove("fade-out");
    }}
  >
    <Menu links={links} className="flex flex-jc-c flex-dir-c flex-ai-c" />
    <Button text="VIEW PLANS" block="menu" />
    <img
      className="menu--mobile__img"
      src={require("../../images/bg-pattern-mobile-nav.svg")}
    />
  </span>
);

export const Navigation = () => {
  function hamburgerClick(e) {
    e.preventDefault();
    const body = document.querySelector("body");
    const menuMobile = document.querySelector(".menu--mobile");

    body.classList.toggle("no-scroll");
    e.target.classList.toggle("opened");

    if (menuMobile.classList.contains("fade-in")) {
      menuMobile.classList.remove("fade-in");
      menuMobile.classList.add("fade-out");
    } else {
      menuMobile.classList.remove("fade-out");
      menuMobile.classList.add("fade-in");
    }
  }

  return (
    <header>
      <nav className="flex flex-ai-c flex-jc-sb">
        <a href="/" className="logo">
          <img src={Logo} alt="logo" className="logo" />
        </a>
        <div className="menu-button-parent flex flex-ai-c flex-dir-r">
          <Menu
            links={links}
            className="menu menu--desktop hide-for-mobile flex flex-ai-c flex-dir-r"
          />
          <Button text="VIEW PLANS" block="nav" className=" hide-for-mobile" />
        </div>
        <Hamburger
          className="hamburger hide-for-desktop "
          handleClick={hamburgerClick}
        />
      </nav>
      <NavigationMobile />
    </header>
  );
};
