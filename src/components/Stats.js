import React from 'react';
import './Stats.css';

function Stats() {
  return (
    <section className="stats-section">
      <div className="stat-item">
        <h3><span className="highlight">96%</span> Client Satisfaction</h3>
        <p>Our Members Love Their Results And Experience</p>
      </div>
      <div className="stat-item">
        <h3><span className="highlight">+5</span> Years Of Experience</h3>
        <p>Trust in Our Proven Track Record of Transforming</p>
      </div>
      <div className="stat-item">
        <h3><span className="highlight">+800</span> Active Members</h3>
        <p>Join Our Thriving Fitness Community</p>
      </div>
      <div className="stat-item">
        <h3><span className="highlight">24/7</span> Support Available</h3>
        <p>Expert Assistance Whenever You Need It</p>
      </div>
    </section>
  );
}

export default Stats;
