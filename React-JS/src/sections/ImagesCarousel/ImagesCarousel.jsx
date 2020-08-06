import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';
import { useMediaQuery } from 'react-responsive';
import { carouselImages } from '../../data';
import { CarouselMobileItem, CarouselDesktopItem } from '../../components';

import './ImagesCarousel.css';

const ImagesCarousel = () => {
  const isMobile = useMediaQuery({ query: '(max-device-width: 800px)' });

  const [index, setIndex] = useState(0);
  const numberOfImages = carouselImages.length;
  const lastIndex = isMobile ? numberOfImages - 1 : numberOfImages / 3 - 1;

  const nextIndex = () => {
    if (index === lastIndex) return setIndex(0);
    return setIndex(index + 1);
  };

  const prevIndex = () => {
    if (index === 0) return setIndex(lastIndex);
    return setIndex(index - 1);
  };

  const renderMobileItems = () => {
    let items = [];
    for (let i = 0; i <= lastIndex; i++) {
      items.push(
        <Carousel.Item>
          <CarouselMobileItem image={carouselImages[i]} />
        </Carousel.Item>,
      );
    }
    return items;
  };

  const renderDesktopItems = () => {
    let items = [];
    let indexOfImage = 0;
    for (let i = 0; i <= lastIndex; i++) {
      items.push(
        <Carousel.Item>
          <CarouselDesktopItem
            images={[
              carouselImages[indexOfImage],
              carouselImages[indexOfImage + 1],
              carouselImages[indexOfImage + 2],
            ]}
          />
        </Carousel.Item>,
      );
      indexOfImage += 3;
    }
    return items;
  };

  const renderCarouselItems = () => (isMobile ? renderMobileItems() : renderDesktopItems());

  return (
    <div id="carousel-container" className="images-carousel-container">
      <ArrowLeft
        size={50}
        className="carousel-arrow carousel-prev-arrow"
        onClick={() => prevIndex()}
      />
      <ArrowRight
        size={50}
        className="carousel-arrow carousel-next-arrow"
        onClick={() => nextIndex()}
      />

      <Carousel activeIndex={index} interval={null} controls={false} indicators={false}>
        {renderCarouselItems()}
      </Carousel>
    </div>
  );
};

export default ImagesCarousel;
