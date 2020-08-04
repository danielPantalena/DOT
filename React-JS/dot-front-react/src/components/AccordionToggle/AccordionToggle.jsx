import React from 'react';
import { ArrowDown } from 'react-bootstrap-icons';
import './AccordionToggle.css';

const AccordionCard = ({ image, title, text, accordionToggleClass, selectAccordion, index }) => {
  
  return (
    <>
      <a
        href="#accordion-section"
        className={accordionToggleClass}
        onClick={() => selectAccordion(index)}
      >
        <h3 class="accordion-title">{title}</h3>
        <ArrowDown size={40} className="accordion-arrow" />
      </a>
      <div class="accordion-content">
        <img class="accordion-image" src={image} alt="accordion" />
        <p class="accordion-text">{text}</p>
      </div>
    </>
  );
};

export default AccordionCard;
