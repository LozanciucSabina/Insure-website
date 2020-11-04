import React from "react";

import Menu from "../NavigationBar/Menu";
import { dataIcons, dataSections } from "./footerData";

export default () => (
  <footer className="footer">
    
    <div className="footer__decoration"></div>
    <img src={require("../../logo.svg")} alt="logo" className="footer__logo" />

    <div className="footer__icons">
      {dataIcons.map((svg) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={svg.width}
          height={svg.height}
        >
          <path fill={svg.fill} d={svg.d} />
        </svg>
      ))}
    </div>
    <div className="footer__line"></div>
    <div className="footer__sections">
      {dataSections.map((sec) => (
        <section>
          <h4>{sec.name.toUpperCase()}</h4>
          {sec.links.map((link) => (
            <a href="#">{link.toUpperCase()}</a>
          ))}
        </section>
      ))}
    </div>
  </footer>
);
