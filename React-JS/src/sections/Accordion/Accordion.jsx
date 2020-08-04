import React, { useState } from 'react';
import { AccordionToggle } from '../../components';
import { accordionData } from '../../data';

import './Accordion.css';

const AccordionComponent = () => {
  const [selectedAccordion, setSelectedAccordion] = useState(null);

  const getClassName = (index) =>
    index === selectedAccordion ? 'toggle-selected accordion-toggle' : 'accordion-toggle';

  const selectAccordion = (index) => {
    if (index === selectedAccordion) return setSelectedAccordion('oi');
    setSelectedAccordion(index);
  };

  return (
    <section id="accordion-section" className="accordion-container">
      <div className="accordion-border">
        {accordionData.map(({ image, title, text }, index) => (
          <AccordionToggle
            index={index}
            image={image}
            title={title}
            text={text}
            selectAccordion={selectAccordion}
            accordionToggleClass={getClassName(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default AccordionComponent;
