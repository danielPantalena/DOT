import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { ArrowDown } from 'react-bootstrap-icons';
import 'AccordionCard.css';

const AccordionCard = ({ image, title, text, eventKey }) => {
  return (
    <>
      <a id="toggle" href="#accordion-section" className="accordion-toggle">
        <h3 class="accordion-title">{title}</h3>
        <ArrowDown size={40} />
      </a>
      <div class="accordion-content">
        <img class="accordion-image" src={image} alt="accordion" />
        <p class="accordion-text">{text}</p>
      </div>
    </>
  );
};

export default AccordionCard;
