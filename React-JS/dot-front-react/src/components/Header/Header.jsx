import React from 'react';
import backgroundTrees from '../../images/lf_background_trees.jpg'
import './Header.css';

const Header = () => {
  return (
    <div>
      <header className="mobile-header">
        <h1>LOREM IPSUM</h1>
        <p className="mobile-header-text">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
      </header>
      <div className="background-image-container">
        <a href="#carousel" className="mobile-header-arrow">
          <img className="background-image-arrow" src={backgroundTrees} alt="arrow" />
        </a>
        <div className="desktop-header">
          <header>
            <h1>LOREM IPSUM</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </header>
          <a href="#carousel">
            <img className="background-image-arrow" src={backgroundTrees} alt="arrow" />
          </a>
        </div>
        <div className="select-background-image">
          <label className="radio-button">
            <input type="radio" name="selected-image" value="image-1" checked />
            <span></span>
          </label>
          <label className="radio-button">
            <input type="radio" name="selected-image" value="image-2" />
            <span></span>
          </label>
          <label className="radio-button">
            <input type="radio" name="selected-image" value="image-3" />
            <span></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
