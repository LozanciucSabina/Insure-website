import React from "react";

import { Line, Heading, Paragraph, Button } from "../ReusableComponents";
import InfoColumns from "./InfoColumns";

export default () => (
  <div className="main">
    <Line block="main" />
    <Heading block="main" content="We’re different" />
    <InfoColumns />
    <div className="how-we-work-container">
      <div className="main__image-right"></div>
      <h2>Find out more about how we work</h2>
      <Button block="main" text="HOW WE WORK" className='button' />
    </div>
  </div>
);
