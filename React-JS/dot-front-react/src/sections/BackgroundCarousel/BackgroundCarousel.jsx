import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { SelectBackgroundImage, HeaderDesktop, HeaderMobile } from '../../components';
import { backgroundTrees, seoulTower, blueCartoon } from '../../images';
import './BackgroundCarousel.css';

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="carousel-container">
      <div className="header-mobile-container">
        <HeaderMobile />
      </div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        controls={false}
        interval={null}
        indicators={false}
      >
        <Carousel.Item>
          <img
            className="background-image d-block w-100"
            src={backgroundTrees}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="background-image d-block w-100"
            src={seoulTower}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="background-image d-block w-100"
            src={blueCartoon}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="header-desktop-container">
        <HeaderDesktop />
      </div>
      <div className="select-background-container">
        <SelectBackgroundImage setIndex={setIndex} />
      </div>
    </div>
  );
};

export default CarouselComponent;
