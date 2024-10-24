import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Metrics from './components/Metrics';
import Stats from './components/Stats';
import Services from './components/Services';
import Plans from './components/Plans';
import FitnessTools from './components/FitnessTools';
import Testimonials from './components/Testimonials';
import Trainers from './components/Trainers';
import BlogPosts from './components/BlogPosts';
import CommunityFAQ from './components/CommunityFAQ';
import Footer from './components/Footer'
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Metrics />
      <Stats />
      <Services />
      <Plans />
      <FitnessTools />
      <Testimonials />
      <Trainers />
      <BlogPosts />
      <CommunityFAQ />
      <Footer />
    </div>
  );
}

export default App;
