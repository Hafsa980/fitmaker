import React from 'react';
import customer from '../images/customer.png'
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2>What Our <span className="highlight">Customers Say</span></h2>
      <div className="testimonial-card">
        <div className="testimonial-text">
          <p>"The FitMaker Experience Transformed My Life! I Achieved Goals I Never Thought Were Possible, Thanks To Their Amazing Coaching Program."</p>
        </div>
        <div className="customer-details">
          <img src={customer} alt="Customer" />
          <div>
            <h3>Steven Howard</h3>
            <p>Professional Athlete</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
