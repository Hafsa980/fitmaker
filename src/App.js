import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Metrics from './components/Metrics';
import Stats from './components/Stats';
import Services from './components/Services';
import Plans from './components/Plans';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Metrics />
      <Stats />
      <Services />
      <Plans />
      <Footer />
    </div>
  );
}

export default App;
