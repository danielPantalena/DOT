const backgroundImage = document.querySelector('.background-image-container');
const selectBackgroundImage = document.querySelector('.select-background-image');

selectBackgroundImage.addEventListener('click', (e) => {
  if (e.target === selectBackgroundImage) return null;
  switch (e.target.value) {
    case 'image-1':
      backgroundImage.style.backgroundImage = "url('../images/lf_background_trees.jpg')";
      break;
    case 'image-2':
      backgroundImage.style.backgroundImage = "url('../images/tower-1800x1013.jpg')";
      break;
    case 'image-3':
      backgroundImage.style.backgroundImage = "url('../images/cartoon-1800x1013.jpg')";
      break;
    default:
      return null;
  }
});

// Carousel

// Carousel - Elements
const carouselSliderContainer = document.querySelector('.carousel-slider-container');
const carouselSlider = document.querySelector('.carousel-slider');
const carouselImages = document.querySelectorAll('img.carousel-image');

// Carousel - Buttons
const prevButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const carouselArrows = document.querySelectorAll('.carousel-container .carousel-arrow');

// Carousel - Dimensions
let carouselPosition;
let lastCarouselPosition;
let sliderContainerWidth;
const initialCarouselPosition = 0;

// Carousel - Functions

const setCarouselDimensions = () => {
  const screenWidth = window.innerWidth;
  sliderContainerWidth = (screenWidth * 80) / 100;
  let imageWidth = (90 / 100) * sliderContainerWidth;
  let spaceBetweenImages = (10 / 100) * sliderContainerWidth;
  carouselPosition = initialCarouselPosition;
  lastCarouselPosition = 9;
  let largeScreen = screenWidth > 800;
  if (largeScreen) {
    imageWidth = ((90 / 100) * sliderContainerWidth) / 3;
    spaceBetweenImages = ((10 / 100) * sliderContainerWidth) / 3;
    lastCarouselPosition = 3;
  }

  // Carousel - Set dimensions
  carouselSliderContainer.style.width = `${sliderContainerWidth}px`;
  for (const image of carouselImages) {
    image.style.width = `${imageWidth}px`;
    image.style.margin = `5px ${spaceBetweenImages / 2}px`;
  }
  for (const arrow of carouselArrows) {
    arrow.style.marginTop = `${-imageWidth * 1.2}px`;
  }
};

setCarouselDimensions();

const setSliderPosition = () => {
  carouselSlider.style.transform = `translateX(${-sliderContainerWidth * carouselPosition}px)`;
  return carouselPosition;
};

const addSliderAnimation = () => {
  carouselSlider.style.transition = 'transform 1200ms ease-in-out';
};

const removeSliderAnimation = () => {
  carouselSlider.style.transition = 'none';
};

const nextImage = () => {
  addSliderAnimation();
  carouselPosition++;
  setSliderPosition();
};

const prevImage = () => {
  addSliderAnimation();
  carouselPosition--;
  setSliderPosition();
};

// Carousel - Listeners
window.addEventListener('resize', () => {
  setCarouselDimensions();
  setSliderPosition();
});

nextButton.addEventListener('click', () => {
  if (carouselPosition < lastCarouselPosition) {
    nextImage();
  } else {
    removeSliderAnimation();
    carouselPosition = 0;
    setSliderPosition();
    setTimeout(nextImage, 10);
  }
});

prevButton.addEventListener('click', () => {
  if (carouselPosition > 0) {
    prevImage();
  } else {
    removeSliderAnimation();
    carouselPosition = lastCarouselPosition;
    setSliderPosition();
    setTimeout(prevImage, 10);
  }
});

// Accordion

const accordionContainer = document.querySelector('.accordion-container');
const toggles = document.querySelectorAll('.accordion-toggle');

accordionContainer.addEventListener('click', (event) => {
  if (!event.target.classList.contains('accordion-toggle')) return null;
  const accordionToggle = event.target;
  if (accordionToggle.classList.contains('toggle-selected')) {
    return accordionToggle.classList.remove('toggle-selected');
  } else {
    for (let toggle of toggles) {
      toggle.classList.remove('toggle-selected');
    }
    accordionToggle.classList.add('toggle-selected');
  }
});

// Mask

const telephoneInput = document.getElementById('telephone-input');

const initialInputValue = '(**) * ****-****';

let maskArray = initialInputValue.split('');
let telephoneNumbersArray = [];

telephoneInput.value = initialInputValue;

telephoneInput.addEventListener('keydown', (e) => {
  const momentMask = event.target.value;
  console.log(maskArray.join(''));
});

// function doFormat(x, pattern, mask) {
//   var strippedValue = x.replace(/[^0-9]/g, '');
//   var chars = strippedValue.split('');
//   var count = 0;

//   var formatted = '';
//   for (var i = 0; i < pattern.length; i++) {
//     const c = pattern[i];
//     if (chars[count]) {
//       if (/\*/.test(c)) {
//         formatted += chars[count];
//         count++;
//       } else {
//         formatted += c;
//       }
//     } else if (mask) {
//       if (mask.split('')[i]) formatted += mask.split('')[i];
//     }
//   }
//   return formatted;
// }

// document.querySelectorAll('[data-mask]').forEach((elementWithMask) => {
//   const format = (elem) => {
//     const val = doFormat(elem.value, elem.getAttribute('data-format'));
//     elem.value = doFormat(
//       elem.value,
//       elem.getAttribute('data-format'),
//       elem.getAttribute('data-mask'),
//     );

//     if (elem.createTextRange) {
//       var range = elem.createTextRange();
//       range.move('character', val.length);
//       range.select();
//     } else if (elem.selectionStart) {
//       elem.focus();
//       elem.setSelectionRange(val.length, val.length);
//     }
//   };
//   elementWithMask.addEventListener('keyup', function () {
//     format(elementWithMask);
//   });
//   elementWithMask.addEventListener('keydown', function () {
//     format(elementWithMask);
//   });
//   format(elementWithMask);
// });
