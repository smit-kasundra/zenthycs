import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Stats from './components/Stats';
import Inquiries from './components/Inquiries';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    let locomotiveScroll;
    
    // Initialize Locomotive Scroll natively (v5 style)
    try {
      locomotiveScroll = new LocomotiveScroll({
        lenisOptions: {
          wrapper: window,
          content: document.documentElement,
          lerp: 0.1,
          duration: 1.5,
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          smoothTouch: false,
          wheelMultiplier: 1,
        }
      });
    } catch (e) {
      // Fallback in case it's an older v4 version
      console.log('Locomotive scroll older version or error', e);
    }
    
    return () => {
      if (locomotiveScroll && locomotiveScroll.destroy) {
        locomotiveScroll.destroy();
      }
    };
  }, []);

  return (
    <>
      <Cursor />
      <Navbar />
      
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <Stats />
        <Inquiries />
        <CTA />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
