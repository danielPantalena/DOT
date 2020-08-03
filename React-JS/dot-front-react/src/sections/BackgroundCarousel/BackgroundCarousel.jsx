import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { SelectBackgroundImage, HeaderDesktop, HeaderMobile } from '../../components';
import { backgroundTrees, seoulTower, blueCartoon, arrowGrey } from '../../images';
import { useMediaQuery } from 'react-responsive';
import './BackgroundCarousel.css';

const CarouselComponent = () => {
  const isMobile = useMediaQuery({ query: '(max-device-width: 800px)' });
  console.log(isMobile);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="carousel-container">
      {isMobile && (
        <div className="header-mobile-container">
          <HeaderMobile />
        </div>
      )}
    
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        controls={false}
        interval={null}
        indicators={false}
      >
        <Carousel.Item>
          <img className="background-image d-block w-100" src={backgroundTrees} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="background-image d-block w-100" src={seoulTower} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="background-image d-block w-100" src={blueCartoon} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      {isMobile && (
        <a href="#carousel" className="mobile-header-arrow">
          <img className="background-image-arrow" src={arrowGrey} alt="arrow" />
        </a>
      )}
      {!isMobile && (
        <div className="header-desktop-container">
          <HeaderDesktop />
        </div>
      )}
      <div className="select-background-container">
        <SelectBackgroundImage setIndex={setIndex} />
      </div>
    </div>
  );
};

export default CarouselComponent;
