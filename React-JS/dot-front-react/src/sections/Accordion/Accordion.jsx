import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { AccordionCard } from '../../components';
import { accordionData } from '../../data';

import './Accordion.css';

const AccordionComponent = () => {
  return (
    <section id="accordion-section" class="accordion-container">
      <div class="accordion-border">
        {accordionData.map(({ image, title, text }, index) => (
          <AccordionCard image={image} title={title} text={text} eventKey={String(index)} />
        ))}
      </div>
    </section>
  );
};

export default AccordionComponent;
