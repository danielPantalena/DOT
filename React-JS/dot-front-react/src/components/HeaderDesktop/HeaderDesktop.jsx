import React from 'react';
import { arrowGrey } from '../../images';
import './HeaderDesktop.css';

const HeaderDesktop = () => {
  return (
    <div className="desktop-header-container">
      <div class="desktop-header">
        <header>
          <h1>LOREM IPSUM</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </header>
        <a href="#carousel">
          <img class="background-image-arrow" src={arrowGrey} alt="arrow" />
        </a>
      </div>
    </div>
  );
};

export default HeaderDesktop;
