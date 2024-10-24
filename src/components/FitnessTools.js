import React from 'react';
import cal1 from '../images/cal1.png'
import bmi from '../images/bmi.png'
import goal from '../images/goal.png'
import './FitnessTools.css';

function FitnessTools() {
  return (
    <section className="tools-section">
      <h2>Our <span className="highlight">Fitness Tools</span></h2>
      <p>Access A Variety Of Tools To Help You Reach Your Fitness Goals More Effectively.</p>
      <div className="tools-container">
        <div className="tool-card">
          <img src={cal1} alt="Calorie Calculator" />
          <h3>Calorie Calculator</h3>
          <button>Learn More</button>
        </div>
        <div className="tool-card">
          <img src={bmi} alt="BMI Calculator" />
          <h3>BMI Calculator</h3>
          <button>Learn More</button>
        </div>
        <div className="tool-card">
          <img src={goal} alt="Goal Setting Tool" />
          <h3>Goal Setting Tool</h3>
          <button>Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default FitnessTools;
