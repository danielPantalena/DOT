import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { ImagesCarouselItem } from '../../components';
import { backgroundTrees, blueCartoon, seoulTower, cartoonImage, carImage } from '../../images';

const ImagesCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <ImagesCarouselItem image={backgroundTrees} />
      </Carousel.Item>
      <Carousel.Item>
        <ImagesCarouselItem image={blueCartoon} />
      </Carousel.Item>
      <Carousel.Item>
        <ImagesCarouselItem image={seoulTower} />
      </Carousel.Item>
      <Carousel.Item>
        <ImagesCarouselItem image={backgroundTrees} />
      </Carousel.Item>
      <Carousel.Item>
        <ImagesCarouselItem image={cartoonImage} />
      </Carousel.Item>
      <Carousel.Item>
        <ImagesCarouselItem image={backgroundTrees} />
      </Carousel.Item>
      <Carousel.Item>
        <ImagesCarouselItem image={carImage} />
      </Carousel.Item>
      <Carousel.Item>
        <ImagesCarouselItem image={seoulTower} />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImagesCarousel;
