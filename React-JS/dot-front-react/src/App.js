import React from 'react';
import { BackgroundCarousel, ImagesCarousel, CircleImage, Accordion } from './sections';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BackgroundCarousel />
      {/* <ImagesCarousel /> */}
      <CircleImage />
      <Accordion />
    </div>
  );
}

export default App;
