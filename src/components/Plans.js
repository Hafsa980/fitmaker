import React, { useState } from 'react';
import './Plans.css';

function Plans() {
  const [billingCycle, setBillingCycle] = useState('Monthly');

  const handleToggle = (cycle) => {
    setBillingCycle(cycle);
  };

  return (
    <section className="plans-section">
      <h2>Our <span className="highlight">Plans</span></h2>
      <p>Select The Plan That Suits Your Fitness Goals And Let Our Expert Coaches Guide You Every Step Of The Way.</p>

      {/* Billing Cycle Toggle */}
      <div className="billing-toggle">
        <button 
          className={`toggle-btn ${billingCycle === 'Monthly' ? 'active' : ''}`} 
          onClick={() => handleToggle('Monthly')}
        >
          Monthly
        </button>
        <button 
          className={`toggle-btn ${billingCycle === 'Annually' ? 'active' : ''}`} 
          onClick={() => handleToggle('Annually')}
        >
          Annually
        </button>
      </div>

      <div className="plans-container">
        {/* Pro Plan */}
        <div className="plan-card">
          <h3 className="plan-title">PRO PLAN</h3>
          <p className="plan-description">
            Our Pro Plan Offers Advanced Workouts And Personalized Nutrition Coaching To Help You Reach Your Goals Faster.
          </p>
          <ul className="plan-features">
            <li>Access To All Of Our Exercise Videos</li>
            <li>Progress Tracking</li>
            <li>Supportive Online Community</li>
            <li>Advanced, Personalized Workout Plans</li>
            <li>Comprehensive Nutrition Coaching</li>
            <li>Access To Advanced Workout Programs</li>
            <li>Body Composition Analysis</li>
          </ul>
          <div className="plan-price">99$ / {billingCycle}</div>
          <button className="choose-plan">Choose This Plan</button>
        </div>

        {/* Custom Plan */}
        <div className="plan-card">
          <h3 className="plan-title">CUSTOM PLAN</h3>
          <p className="plan-description">
            Experience A Fully Tailored Fitness Experience With Our Custom Plan. Work One-On-One With A Dedicated Trainer To Achieve Your Goals.
          </p>
          <ul className="plan-features">
            <li>Access To All Of Our Exercise Videos</li>
            <li>Progress Tracking</li>
            <li>Supportive Online Community</li>
            <li>Fully Customized Workout And Nutrition Plan</li>
            <li>Weekly Check-Ins With Your Trainer</li>
            <li>Access To All Platform Features</li>
            <li>Exclusive Gear Discounts</li>
          </ul>
          <div className="plan-price">149$ / {billingCycle}</div>
          <button className="choose-plan">Choose This Plan</button>
        </div>

        {/* Beginner Plan */}
        <div className="plan-card">
          <h3 className="plan-title">BEGINNER PLAN</h3>
          <p className="plan-description">
            Start Your Fitness Journey With Our Beginner Plan. Build A Strong Foundation With Basic Workouts And Essential Nutrition Guidance.
          </p>
          <ul className="plan-features">
            <li>Access To All Of Our Exercise Videos</li>
            <li>Progress Tracking</li>
            <li>Supportive Online Community</li>
            <li>Personalized Workout Plans</li>
            <li>Basic Nutrition Guidance</li>
            <li>Access To Group Fitness Classes</li>
          </ul>
          <div className="plan-price">49$ / {billingCycle}</div>
          <button className="choose-plan">Choose This Plan</button>
        </div>
      </div>
    </section>
  );
}

export default Plans;
