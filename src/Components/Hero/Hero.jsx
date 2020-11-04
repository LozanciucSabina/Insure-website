import React from "react";

import { content } from "./heroData";
import { Line, Heading, Paragraph, Button } from "../ReusableComponents";
import {NavigationMobile} from "../NavigationBar/Navigation"


export default () => ( 
 <div className="hero">
  <div className='hero__image'>
  </div>
  <div className="hero__container flex flex-dir-c flex-jc-sb">
    <div className="hero__image-left"></div>
    <Line block="hero" className="hide-for-mobile" />
    <Heading block="hero" content={content.heading} />
    <Paragraph block="hero" content={content.paragraph} />
    <Button block="hero" text="VIEW PLANS" className='button' />
    <div className="hero__image-right"></div>
  </div>
  </div>
)

