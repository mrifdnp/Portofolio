import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import axios from 'axios';

import Preloader from '../components/Preloader';
import Navbar from '../components/Navbar'; 
import SequenceScroll from '../components/SequenceScroll';
import About from '../components/About';
import Stats from '../components/Stats';
import Project from '../components/Project';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Home = () => {
  const [data, setData] = useState({
    hero: null,
    about: null,
    projects: [],
    experiences: [],
    profile: null,
  });

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/portfolio');
        setData(res.data);
      } catch (err) {
        console.error("Gagal mengambil data dari server:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='bg-[#050505] text-neutral-300 antialiased selection:bg-pink-500 selection:text-white'>
      <Preloader />
      
      <Navbar />

      <main>
        {/* Sticky Background Hero Sequence */}
        <SequenceScroll heroData={data.hero} />
        
        {/* Content sections scrolling up over the hero */}
        <div className="relative z-10 w-full bg-[#050505]">
          <About aboutData={data.about} />
          <Stats />
          <Project projects={data.projects} />
          <Experience experiences={data.experiences} />
          <Contact profile={data.profile} />
        </div>
      </main>
    </div>
  );
};

export default Home;
