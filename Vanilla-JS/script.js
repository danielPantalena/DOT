const backgroundImage = document.querySelector('.background-image-container');
const selectBackgroundImage = document.querySelector('.select-background-image');

selectBackgroundImage.addEventListener('click', (e) => {
  if (e.target === selectBackgroundImage) return null;
  switch (e.target.value) {
    case 'image-1':
      backgroundImage.style.backgroundImage = "url('../images/Beach-Sunset.jpg')";
      break;
    case 'image-2':
      backgroundImage.style.backgroundImage = "url('../images/Earth-Horizon.jpg')";
      break;
    case 'image-3':
      backgroundImage.style.backgroundImage = "url('../images/Green.jpg')";
      break;
    default:
      return null;
  }
});

// Carousel
const carouselSliderContainer = document.querySelector(
  '.carousel-container .carousel-slider-container',
);
const carouselSlider = document.querySelector('.carousel-slider');
const carouselImages = document.querySelectorAll('.carousel-slider img.carousel-image');

// Carousel - buttons
const prevButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');

// Carousel - dimensions
const numberOfImages = carouselImages.length;
const screenWidth = window.innerWidth;
const sliderWidth = (screenWidth * 80) / 100;
const imageWidth = sliderWidth / 4;
const spaceBetweenImages = imageWidth / 3;
const imagesWidth = numberOfImages * (imageWidth + spaceBetweenImages);
const initialPosition = imagesWidth / 2 - sliderWidth / 2;

// Carousel - Set dimensions
carouselSliderContainer.style.width = `${sliderWidth}px`;
for (const image of carouselImages) {
  image.style.width = `${imageWidth}px`;
  image.style.margin = `5px ${spaceBetweenImages / 2}px`;
}

// Carousel - Functions
let position = 0;

const addSliderAnimation = () => {
  carouselSlider.style.transition = 'transform 1200ms ease-in-out';
};

const removeSliderAnimation = () => {
  carouselSlider.style.transition = 'none';
};

const setSliderPosition = () => {
  carouselSlider.style.transform = `translateX(${-sliderWidth * position}px)`;
  return position;
};

const nextImage = () => {
  addSliderAnimation();
  position++;
  setSliderPosition();
};

const prevImage = () => {
  addSliderAnimation();
  position--;
  setSliderPosition();
};

// Carousel - Listeners
nextButton.addEventListener('click', () => {
  if (position < 3) {
    nextImage();
  } else {
    removeSliderAnimation();
    position = 0;
    setSliderPosition();
    setTimeout(nextImage, 1);
  }
});

prevButton.addEventListener('click', () => {
  if (position > 0) {
    prevImage();
  } else {
    removeSliderAnimation();
    position = 3;
    setSliderPosition();
    setTimeout(prevImage, 1);
  }
});

// Accordion

const accordionContainer = document.querySelector('.accordion-container');
const contents = document.querySelectorAll('.accordion-content');

accordionContainer.addEventListener('click', (event) => {
  if (event === accordionContainer) return null;
  console.log(event.target.querySelector('i'));
  const arrow = event.target.querySelector('i');
  const contentToShow = event.target.nextElementSibling;
  if (contentToShow.classList.contains('content-selected')) {
    arrow.classList.remove('arrow-selected')
    return contentToShow.classList.remove('content-selected');
  } else {
    for (content of contents) {
      content.classList.add('content-hidden');
    }
    arrow.classList.add()
    return contentToShow.classList.add('content-selected');
  }
});
