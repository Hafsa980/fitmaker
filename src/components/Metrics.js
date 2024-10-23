import React from 'react';
import './Metrics.css';

function Metrics() {
  return (
    <section className="metrics">
      <div className="metric">
        <h3>+ 80</h3>
        <p>Coaches</p>
      </div>
      <div className="metric">
        <h3>+ 1300</h3>
        <p>Positive Reviews</p>
      </div>
      <div className="metric">
        <h3>+ 1000</h3>
        <p>Workout Videos</p>
      </div>
      <div className="metric">
        <h3>+ 1500</h3>
        <p>Trainers</p>
      </div>
    </section>
  );
}

export default Metrics;
