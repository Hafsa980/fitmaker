import React from 'react';
import './Services.css';

function Services() {
  return (
    <section className="services-section">
      <h2>Our <span className="highlight">Services</span></h2>
      <p>At this part you can easily access all of our services. Take a look at them and choose whichever you want.</p>
      <div className="services-container">
        <div className="service-card">
          <img src="../images/losing-weight-image.jpg" alt="Losing Weight" />
          <h3>Losing Weight</h3>
          <p>
            Achieve sustainable fat loss through scientific training and personalized diet plans.
          </p>
          <button className="learn-more">Learn More</button>
        </div>
        <div className="service-card">
          <img src="../images/building-muscle-image.jpg" alt="Building Muscle" />
          <h3>Building Muscle</h3>
          <p>
            Get stronger and define your muscles with targeted workouts and expert guidance.
          </p>
          <button className="learn-more">Learn More</button>
        </div>
        <div className="service-card">
          <img src="../images/training-at-home.jpg" alt="Training at Home" />
          <h3>Training in Home</h3>
          <p>
            Stay fit and strong with our ultimate home fitness plans designed for flexibility.
          </p>
          <button className="learn-more">Learn More</button>
        </div>
        <div className="service-card">
          <img src="../images/gym-plan.jpg" alt="Gym Plan" />
          <h3>Gym Plan</h3>
          <p>
            Maximize your time in the gym with our detailed, results-driven workout programs.
          </p>
          <button className="learn-more">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Services;
