import React from 'react';
import './ImagesCarouselItem.css';

const ImagesCarouselItem = ({ image }) => {
  return (
    <div class="image-container">
      <img class="carousel-image" src="../images/lf_background_trees.jpg" alt="" />
      <h3 class="carousel-image-title">LOREM IPSUM</h3>
      <p class="carousel-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquid deleniti amet? Labore
        optio incidunt aspernatur inventore, voluptatibus modi! Tenetur ab sunt repellendus
        molestias fugiat a alias saepe eos beatae?
      </p>
    </div>
  );
};

export default ImagesCarouselItem;
