import React from 'react';
import './CommunityFAQ.css';

function CommunityFAQ() {
  return (
    <section className="community-faq-section">
      <div className="join-community">
        <h2>Join Our <span className="highlight">Fitness Community</span></h2>
        <p>Sign Up Now To Unlock Exclusive Benefits Including Workout Plans, Expert Coaching, And Community Support.</p>
        <form className="sign-up-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
          <button className="google-signup">Sign Up with Google</button>
        </form>
      </div>
      
      <div className="faq-section">
        <h2>FAQ</h2>
        <div className="faq-item">
          <h3>What Is FitMaker And How Can It Help Me Reach My Fitness Goals?</h3>
          <p>FitMaker provides tailored workout plans, coaching, and more to help you reach your fitness goals effectively.</p>
        </div>
        <div className="faq-item">
          <h3>How Do I Get Started With A Workout Plan On FitMaker?</h3>
          <p>Sign up and choose a plan that best fits your goals.</p>
        </div>
        <div className="faq-item">
          <h3>What Is Included In The Custom Plan?</h3>
          <p>The custom plan includes personalized workouts, one-on-one coaching, and more.</p>
        </div>
        <div className="faq-item">
          <h3>Can I Change My Plan After Signing Up?</h3>
          <p>Yes, you can upgrade or change your plan at any time.</p>
        </div>
        <div className="faq-item">
          <h3>What Kind Of Support Can I Expect From My Trainer?</h3>
          <p>You will receive personalized guidance, feedback, and coaching from your trainer.</p>
        </div>
      </div>
    </section>
  );
}

export default CommunityFAQ;
