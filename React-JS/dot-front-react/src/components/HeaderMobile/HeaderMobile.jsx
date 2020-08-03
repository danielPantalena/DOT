import React from 'react';
import './HeaderMobile.css';
import { arrowGrey } from '../../images';


const HeaderMobile = () => {
  return (
    <div className="mobile-header-container">
      <header className="mobile-header">
        <h1>LOREM IPSUM</h1>
        <p className="mobile-header-text">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
      </header>
      <a href="#carousel" className="mobile-header-arrow">
        <img className="background-image-arrow" src={arrowGrey} alt="arrow" />
      </a>
    </div>
  );
};

export default HeaderMobile;