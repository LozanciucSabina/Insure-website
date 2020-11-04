import React from "react";

const columnsData = [
  {
    source: require("../../images/icon-snappy-process.svg"),
    title: "Snappy Process",
    text: `Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.`,
    id: "col1",
  },

  {
    source: require("../../images/icon-affordable-prices.svg"),
    title: `  Affordable Prices`,
    text: `  We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.`,
    id: "col2",
  },

  {
    source: require("../../images/icon-people-first.svg"),
    title: `People First`,
    text: `Our plans aren’t full of conditions and clauses to prevent payouts. We make 
    sure you’re covered when you need it.`,
    id: "col3",
  },
];

export default () => (
  <div className="columns">
    {columnsData.map((column) => (
      <div className={column.id} index={column.id}>
        <img src={column.source} alt="" />
        <h3>{column.title}</h3>
        <p>{column.text}</p>
      </div>
    ))}
  </div>
);
