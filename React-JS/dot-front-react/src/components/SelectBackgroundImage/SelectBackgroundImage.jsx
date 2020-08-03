import React, { useState } from 'react';
import './SelectBackgroundImage.css';

const SelectBackgroundImage = ({ setIndex }) => {
  const [selectedButton, setSelectedButton] = useState('0');

  const selectButton = (event) => {
    const sliderPosition = event.target.value;
    setSelectedButton(sliderPosition);
    setIndex(Number(sliderPosition));
  };

  const returnButtonClass = (buttonNumber) =>
    selectedButton === buttonNumber
      ? 'selected select-background-button'
      : 'select-background-button';

  return (
    <div className="select-background-image">
      <button className={returnButtonClass('0')} value={'0'} onClick={selectButton} />
      <button className={returnButtonClass('1')} value={'1'} onClick={selectButton} />
      <button className={returnButtonClass('2')} value={'2'} onClick={selectButton} />
    </div>
  );
};

export default SelectBackgroundImage;
