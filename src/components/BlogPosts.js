import React from 'react';
import blog1 from '../images/blog1.jpg'
import blog2 from '../images/blog2.jpg'
import blog3 from '../images/blog3.jpg'
import './BlogPosts.css';

function BlogPosts() {
  return (
    <section className="blog-section">
      <h2>Fitmaker <span className="highlight">Blog Posts</span></h2>
      <p>Discover Essential Tips To Maximize Your Workout Results And Reach Your Fitness Goals Faster.</p>
      <div className="blog-container">
        <div className="blog-card">
          <img src={blog1} alt="Blog 1" />
          <h3>5 Essential Exercises For Building Muscle</h3>
          <p>August 9 | Strength Training</p>
        </div>
        <div className="blog-card">
          <img src={blog2} alt="Blog 2" />
          <h3>Best Workouts To Burn Calories</h3>
          <p>August 10 | Weight Loss</p>
        </div>
        <div className="blog-card">
          <img src={blog3} alt="Blog 3" />
          <h3>How To Train Your Core For Stability</h3>
          <p>August 12 | Core Training</p>
        </div>
      </div>
      <button className="load-more">Load More</button>
    </section>
  );
}

export default BlogPosts;
