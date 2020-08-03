import React from 'react';
import { BackgroundCarousel, ImagesCarousel } from './sections';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BackgroundCarousel />
      <ImagesCarousel />
    </div>
  );
}

export default App;
