import React from 'react';
import image1 from '../resources/1.jpg';
import image2 from '../resources/2.jpg';
import image3 from '../resources/3.jpg';
import image4 from '../resources/4.jpg';
import image5 from '../resources/5.jpg';
import HeroCarousel from "react-hero-carousel";

import logo from '../resources/logo.png';


export default function Hero() {
  return (
      <div className="hero">
        <img className="logo-image" src={logo} alt="logo" style={{width: '150px'}} />
        <HeroCarousel height="350px">
          <img src={image1} alt="hero1" className="hero-image" style={{height: '340px'}} />
          <img src={image2} alt="hero2" className="hero-image" style={{height: '340px'}} />
          <img src={image3} alt="hero3" className="hero-image" style={{height: '340px'}} />
          <img src={image4} alt="hero4" className="hero-image" style={{height: '340px'}} />
          <img src={image5} alt="hero5" className="hero-image" style={{height: '340px'}} />
        </HeroCarousel>
      </div>
  )
}