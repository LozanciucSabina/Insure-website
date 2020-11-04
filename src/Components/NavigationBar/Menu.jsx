import React from "react";

export default ({ links, className }) => (
  <section className={className}>
    {links.map(({ url, name }, index) => (
      <a href={url} key={index}>
        {name}
      </a>
    ))}
  </section>
);

