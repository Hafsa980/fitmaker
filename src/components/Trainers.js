import React from 'react';
import HeroImage from '../images/hero-image.png'
import './Trainers.css';

function Trainers() {
  return (
    <section className="trainers-section">
      <h2>Meet Our <span className="highlight">Trainers</span></h2>
      <div className="trainers-container">
        <div className="trainer-card">
          <img src={HeroImage} alt="Sam Cole" />
          <h3>Sam Cole</h3>
          <p>Strength & Conditioning</p>
        </div>
        <div className="trainer-card">
          <img src={HeroImage} alt="Michael Harris" />
          <h3>Michael Harris</h3>
          <p>Muscle Building</p>
        </div>
        <div className="trainer-card">
          <img src={HeroImage} alt="John Anderson" />
          <h3>John Anderson</h3>
          <p>Endurance Training</p>
        </div>
        <div className="trainer-card">
          <img src={HeroImage} alt="Tom Blake" />
          <h3>Tom Blake</h3>
          <p>Flexibility & Mobility</p>
        </div>
      </div>
    </section>
  );
}

export default Trainers;
