import React from 'react';
import {
  BackgroundSlider,
  ImagesCarousel,
  CircleImage,
  Accordion,
  Form,
  Footer,
} from './sections';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className="App">
        <BackgroundSlider />
        <ImagesCarousel />
        <CircleImage />
        <Accordion />
        <Form />
        <Footer />
      </div>
  );
}

export default App;
