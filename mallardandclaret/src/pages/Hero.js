import React from 'react';
import image from '../resources/1.jpg';

export default function Hero() {
  return (
      <div className="hero">
        <img src={image} alt="hero" className="hero-image" />
      </div>
  )
}