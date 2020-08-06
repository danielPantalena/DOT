import React from 'react';
import Card from 'react-bootstrap/Card'
import './CarouselDesktopItem.css';

const ImagesCarouselItem = ({ images }) => {
  return (
    <Card>
      <div className="card-container">
        <div class="image-container">
          <img class="carousel-image" src={images[0]} alt="" />
          <h3 class="carousel-image-title">LOREM IPSUM</h3>
          <p class="carousel-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquid deleniti amet?
            Labore optio incidunt aspernatur inventore, voluptatibus modi! Tenetur ab sunt
            repellendus molestias fugiat a alias saepe eos beatae?
          </p>
        </div>
        <div class="image-container">
          <img class="carousel-image" src={images[0]} alt="" />
          <h3 class="carousel-image-title">LOREM IPSUM</h3>
          <p class="carousel-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquid deleniti amet?
            Labore optio incidunt aspernatur inventore, voluptatibus modi! Tenetur ab sunt
            repellendus molestias fugiat a alias saepe eos beatae?
          </p>
        </div>
        <div class="image-container">
          <img class="carousel-image" src={images[0]} alt="" />
          <h3 class="carousel-image-title">LOREM IPSUM</h3>
          <p class="carousel-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquid deleniti amet?
            Labore optio incidunt aspernatur inventore, voluptatibus modi! Tenetur ab sunt
            repellendus molestias fugiat a alias saepe eos beatae?
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ImagesCarouselItem;
