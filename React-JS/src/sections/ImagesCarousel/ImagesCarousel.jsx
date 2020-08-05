import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { backgroundTrees, blueCartoon, carImage } from '../../images';
import { carouselImages } from '../../data';
import { ImagesCarouselItem } from '../../components';

import './ImagesCarousel.css';

const ImagesCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const renderCarouselItems = () => {
    let items = [];
    for (let i = 0; i < 4; i++) {
      items.push(
        <Carousel.Item>
          <ImagesCarouselItem images={carouselImages} />
        </Carousel.Item>,
      );
    }
    return items;
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {renderCarouselItems()}
    </Carousel>
  );
};

export default ImagesCarousel;
