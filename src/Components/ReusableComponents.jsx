import React from "react";

export const Button = ({ text, block, className }) => (
  <button className={`button ${block}__button ${className ? className: ''}`}>{text}</button>
);

export const Line = ({ block, className }) => (
  <div className={`line ${block}__line ${className ? className: ''}`}></div>
);

export const Heading = ({ block, content }) => (
  <h1 className={`heading ${block}__heading`}>{content}</h1>
);

export const Paragraph = ({ block, content }) => (
  <p className={`paragraph ${block}__paragraph`}>{content}</p>
);
