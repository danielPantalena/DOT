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
const prevButtons = document.querySelectorAll('.carousel-prev-arrow');
const nextButtons = document.querySelectorAll('.carousel-next-arrow');
const carouselArrows = document.querySelectorAll('.carousel-container .carousel-arrow');

// Carousel - Dimensions
let carouselPosition;
let lastCarouselPosition;
let sliderContainerWidth;
const initialCarouselPosition = 0;

// Carousel - Functions

const setCarouselDimensions = () => {
  const screenWidth = window.innerWidth;
  sliderContainerWidth = (screenWidth * 90) / 100;
  let imageWidth = (90 / 100) * sliderContainerWidth;
  let spaceBetweenImages = (10 / 100) * sliderContainerWidth;
  carouselPosition = initialCarouselPosition;
  lastCarouselPosition = 9;
  let largeScreen = screenWidth > 800;
  if (largeScreen) {
    sliderContainerWidth = (screenWidth * 80) / 100;
    imageWidth = ((90 / 100) * sliderContainerWidth) / 3;
    spaceBetweenImages = ((10 / 100) * sliderContainerWidth) / 3;
    lastCarouselPosition = 3;
    for (const arrow of carouselArrows) {
      arrow.style.marginTop = `${imageWidth * 0.25}px`;
    }
  }
  carouselSliderContainer.style.width = `${sliderContainerWidth}px`;
  for (const image of carouselImages) {
    image.style.width = `${imageWidth}px`;
    image.style.margin = `5px ${spaceBetweenImages / 2}px`;
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

for (const nextButton of nextButtons) {
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
}

for (const prevButton of prevButtons) {
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
}

// Accordion

const accordionContainer = document.querySelector('.accordion-container');
const toggles = document.querySelectorAll('.accordion-toggle');

accordionContainer.addEventListener('click', (event) => {
  let accordionToggle;
  if (
    event.target.classList.contains('accordion-arrow') ||
    event.target.classList.contains('accordion-title')
  )
    accordionToggle = event.target.parentNode;
  else if (event.target.classList.contains('accordion-toggle')) accordionToggle = event.target;
  else return null;
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

document.getElementById('phone-input').addEventListener('input', (event) => {
  let phoneNumber = event.target.value;
  phoneNumber = phoneNumber.replace(/\D/g, '');
  phoneNumber = phoneNumber.replace(/(\d{2})(\d{1,4})/, `($1) $2`);
  console.log(phoneNumber.length);
  if (phoneNumber.length >= 10) {
    phoneNumber = phoneNumber.replace(/(\d{4})(\d{1,4})$/, `$1-$2`);
  }
  event.target.value = phoneNumber;
});
