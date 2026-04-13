/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Lenis from 'lenis';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar'; 
import SequenceScroll from './components/SequenceScroll';
import About from './components/About';
import Stats from './components/Stats';
import Project from './components/Project';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';

const App = () => {
  useEffect(() => {
    // Initialize Lenis for smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className='bg-[#050505] text-neutral-300 antialiased selection:bg-pink-500 selection:text-white'>
      <Preloader />
      
      <Navbar />

      <main>
        {/* Sticky Background Hero Sequence */}
        <SequenceScroll />
        
        {/* Content sections scrolling up over the hero */}
        <div className="relative z-10 w-full bg-[#050505]">
          <About />
          <Stats />
          <Project />
          <Testimonial />
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default App;