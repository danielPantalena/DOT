import React from 'react';
import Card from 'react-bootstrap/Card';
import './CarouselMobileItem.css';

const ImagesCarouselItem = ({ image }) => {
  return (
    <Card>
      <div className="card-container">
        <div class="image-container">
          <img class="carousel-mobile-image" src={image} alt="carousel" />
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
