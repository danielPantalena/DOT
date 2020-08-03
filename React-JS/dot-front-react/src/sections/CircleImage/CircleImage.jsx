import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { backgroundTrees } from '../../images';
import './CircleImage.css';

const CircleImage = () => {
  const isMobile = useMediaQuery({ query: '(max-device-width: 800px)' });
  const isDesktop = !isMobile;

  return (
    <section className="circle-image-container">
      <img className="circle-image" src={backgroundTrees} alt="" />
      <div className="circle-image-text">
        <h2 className="circle-image-text-title">LOREM IPSUM</h2>
        <p className="circle-image-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquid repellat
          accusamus debitis quibusdam velit blanditiis quaerat sequi, doloribus ut, illo facilis ea
          aut nesciunt corporis fugit dolorem dolor esse?
        </p>
        <p className="circle-image-text">
          <strong>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero facere, earum dolor
            blanditiis deserunt voluptatem non possimus quidem iste consequatur nihil minus
            dignissimos, omnis doloribus dicta ea reiciendis. Provident, deserunt.
          </strong>
        </p>
        <p className="circle-image-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam nam impedit ratione
          praesentium voluptates amet architecto earum aperiam iure at aut maxime, vel autem facilis
          molestias minus excepturi quasi maiores!
        </p>
        <p className="circle-image-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, exercitationem? Fugit
          repudiandae quas iste est assumenda eum soluta quos optio doloremque, suscipit dolor amet
          ullam consequatur porro, quae incidunt itaque.
        </p>
      </div>
    </section>
  );
};

export default CircleImage;
