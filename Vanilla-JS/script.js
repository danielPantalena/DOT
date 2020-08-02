// Background Image

// Background - Elements
const backgroundImage = document.querySelector('.background-image-container');
const selectBackgroundImage = document.querySelector('.select-background-image');

// Background - Listener
selectBackgroundImage.addEventListener('click', (e) => {
  if (e.target === selectBackgroundImage) return null;
  backgroundImage.style.opacity = '0';
  const updateBackgroundImage = () => {
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
  };
  setTimeout(updateBackgroundImage, 250);
  return setTimeout(() => (backgroundImage.style.opacity = '1'), 250);
});

// Carousel

// Carousel - Elements
const carouselSliderContainer = document.querySelector('.carousel-slider-container');
const carouselSlider = document.querySelector('.carousel-slider');
const carouselImages = document.querySelectorAll('img.carousel-image');
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

// Accordion - Elements
const accordionContainer = document.querySelector('.accordion-container');
const toggles = document.querySelectorAll('.accordion-toggle');

// Accordion - Listener
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

// Form

// Form - Mask
document.getElementById('phone-input').addEventListener('input', (event) => {
  let phoneNumber = event.target.value;
  phoneNumber = phoneNumber.replace(/\D/g, '');
  phoneNumber = phoneNumber.replace(/^(\d{2})(\d{1,4})/, `($1) $2`);
  if (phoneNumber.length >= 10) {
    phoneNumber = phoneNumber.replace(/(\d{4})(\d{1,4})$/, `$1-$2`);
  }
  event.target.value = phoneNumber;
});

// Form - Elements
const form = document.querySelector('.form-container form');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const phoneInput = document.getElementById('phone-input');
const messageTextArea = document.getElementById('message-input');
const inputs = document.querySelectorAll('.form-container .input-container input');
const submitButton = document.getElementById('submit-button');

// Form - Regex
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;

// Form - Functions
const validateEmail = (email) => {
  const isValid = emailRegex.test(email);
  return isValid;
};

const validatePhoneNumber = (phoneNumber) => {
  const isValid = phoneRegex.test(phoneNumber);
  return isValid;
};

const addInvalidMessage = (element) => {
  const elementParent = element.parentNode;
  const invalidMessageElement = document.createElement('span');
  invalidMessageElement.innerHTML = `${element.name} inválido(a)`;
  elementParent.appendChild(invalidMessageElement);
  elementParent.style.border = '1px solid red';
  elementParent.style.color = 'red';
};

const removeInvalidMessage = (element) => {
  const elementParent = element.parentNode;
  if (elementParent.lastChild.tagName !== 'SPAN') return null;
  elementParent.style.border = 'none';
  elementParent.style.color = 'black';
  return elementParent.removeChild(elementParent.lastChild);
};

const removeAllInvalidMessages = () => {
  for (const input of inputs) {
    removeInvalidMessage(input);
  }
  removeInvalidMessage(messageTextArea);
};

const validateForm = () => {
  const isEmailValid = validateEmail(emailInput.value);
  if (!isEmailValid) addInvalidMessage(emailInput);
  const isPhoneValid = validatePhoneNumber(phoneInput.value);
  if (!isPhoneValid) addInvalidMessage(phoneInput);
  const isNameValid = nameInput.value !== '';
  if (!isNameValid) addInvalidMessage(nameInput);
  const isMessageValid = messageTextArea.value !== '';
  if (!isMessageValid) addInvalidMessage(messageTextArea);
  const isFormValid = isEmailValid && isPhoneValid && isNameValid && isMessageValid;
  return isFormValid;
};

// Form - Listeners
submitButton.addEventListener('click', (e) => {
  removeAllInvalidMessages();
  e.preventDefault();
  if (validateForm()) {
    form.submit();
    return alert('Formulário enviado :)');
  } else {
    return alert('Formulário incompleto');
  }
});

for (const input of inputs) {
  input.addEventListener('input', (e) => removeInvalidMessage(e.target));
}

messageTextArea.addEventListener('input', (e) => removeInvalidMessage(e.target));
