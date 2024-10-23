import React from 'react';
import HeroSection from '../components/HeroSection';
import ProgramCards from '../components/ProgramCards';
import TrainersSection from '../components/TrainersSection';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <HeroSection />
      <ProgramCards />
      <TrainersSection />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
