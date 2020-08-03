import React, { useState } from 'react';
import './SelectBackgroundImage.css';

const SelectBackgroundImage = ({ setIndex, numberOfImages }) => {
  const [selectedButton, setSelectedButton] = useState('0');

  const selectButton = (event) => {
    const sliderPosition = event.target.value;
    setSelectedButton(sliderPosition);
    setIndex(Number(sliderPosition));
  };

  const returnButtonClass = (buttonNumber) =>
    Number(selectedButton) === buttonNumber
      ? 'selected select-background-button'
      : 'select-background-button';

  const renderButtons = (numberOfButtons) => {
    let buttonsToRender = [];
    for (let i = 0; i < numberOfButtons; i++) {
      buttonsToRender.push(
      <button className={returnButtonClass(i)} value={i} onClick={selectButton} />
      )
    }
    return buttonsToRender;
  }

  return (
    <div className="select-background-image">
      {renderButtons(numberOfImages)}
    </div>
  );
};

export default SelectBackgroundImage;
