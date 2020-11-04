import React from "react";

export default function Hamburger({ className, handleClick }) {
  return (
    <a href="#" className={className} onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
    </a>
  );
}
