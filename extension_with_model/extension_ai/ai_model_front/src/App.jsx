import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImageCarousel from './components/ImageCarousel';
import How from './components/How';
import Footer from './components/Footers'; 
import MainComponent from './components/MainComponent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <How />
      <ImageCarousel />
      <MainComponent />
      <Footer /> 
    </div>
  );
}

export default App;
