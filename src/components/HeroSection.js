import React from 'react';
import './HeroSection.css';
import HeroImage from '../images/hero-image.png'

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Achieve Your <span>Fitness Goals</span> With FitMaker</h1>
        <p>
          Join the FitMaker community and transform your fitness journey. Our expert coaches and
          personalized programs are designed to help you achieve your goals and exceed your expectations.
        </p>
        <div className="hero-buttons">
          <button className="primary-btn">Start Your Journey</button>
          <button className="secondary-btn">Explore Programs</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={HeroImage} alt="Fitmaker Hero" />
      </div>
    </section>
  );
}

export default HeroSection;
