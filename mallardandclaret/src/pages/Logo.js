import React from 'react';
import logo from '../resources/logo.png';

export default function Logo() {
  return (
      <div className="logo-image">
        <img src={logo} alt="logo" />
      </div>
  )
}