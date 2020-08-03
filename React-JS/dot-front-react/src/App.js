import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  BackgroundCarousel,
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
    <Router>
      <div className="App">
        <BackgroundCarousel />
        {/* <ImagesCarousel /> */}
        <CircleImage />
        <Accordion />
        <Form />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
