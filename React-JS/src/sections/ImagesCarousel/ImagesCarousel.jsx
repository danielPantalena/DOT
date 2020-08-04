import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { ImagesCarouselItem } from '../../components';
import { backgroundTrees, blueCartoon, seoulTower, cartoonImage, carImage } from '../../images';

const ImagesCarousel = () => {
  return (
    <div id="carousel-container">
        <ImagesCarouselItem image={backgroundTrees} />

        <ImagesCarouselItem image={blueCartoon} />

        <ImagesCarouselItem image={seoulTower} />

        <ImagesCarouselItem image={backgroundTrees} />

        <ImagesCarouselItem image={cartoonImage} />

        <ImagesCarouselItem image={backgroundTrees} />

        <ImagesCarouselItem image={carImage} />

        <ImagesCarouselItem image={seoulTower} />
    </div>
  );
};

export default ImagesCarousel;
