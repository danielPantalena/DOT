import React from 'react';
import './ImagesCarouselItem.css';
import { Carousel } from 'react-bootstrap';

const ImagesCarouselItem = ({ image }) => {
  return (
    <div className="image-container">
      <img className="carousel-image d-block w-100" src={image} alt="carousel" />
      <Carousel.Caption>
        <h3 className="carousel-image-title">LOREM IPSUM</h3>
        <p className="carousel-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquid deleniti amet?
          Labore optio incidunt aspernatur inventore, voluptatibus modi! Tenetur ab sunt repellendus
          molestias fugiat a alias saepe eos beatae?
        </p>
      </Carousel.Caption>
    </div>
  );
};

export default ImagesCarouselItem;
