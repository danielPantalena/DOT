import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { SelectBackgroundImage, HeaderDesktop, HeaderMobile } from '../../components';
import { backgroundImages } from '../../data';
import { arrowGrey } from '../../images';
import { useMediaQuery } from 'react-responsive';
import './BackgroundCarousel.css';

const CarouselComponent = () => {
  const isMobile = useMediaQuery({ query: '(max-device-width: 800px)' });
  const isDesktop = !isMobile;

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
        {backgroundImages.map((image) => (
          <Carousel.Item>
            <img className="background-image d-block w-100" src={image} alt="First slide" />
          </Carousel.Item>
        ))}
      </Carousel>
      {isMobile && (
        <div className="mobile-header-arrow-container">
          <img className="background-image-arrow mobile-header-arrow" src={arrowGrey} alt="arrow" />
        </div>
      )}
      {isDesktop && (
        <div className="header-desktop-container">
          <HeaderDesktop />
        </div>
      )}
      <div className="select-background-container">
        <SelectBackgroundImage setIndex={setIndex} numberOfImages={backgroundImages.length} />
      </div>
    </div>
  );
};

export default CarouselComponent;
