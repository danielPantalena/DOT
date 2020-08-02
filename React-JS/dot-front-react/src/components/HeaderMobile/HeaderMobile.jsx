import React from 'react';
import './HeaderMobile.css';
import { arrowGrey } from '../../images';

const HeaderMobile = () => {
  return (
    <div className="mobile-header-container">
      <header class="mobile-header">
        <h1>LOREM IPSUM</h1>
        <p class="mobile-header-text">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
      </header>
      <a href="#carousel" class="mobile-header-arrow">
        <img class="background-image-arrow" src={arrowGrey} alt="arrow" />
      </a>
    </div>
  );
};

export default HeaderMobile;
