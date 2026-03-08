import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Magnetic from './Magnetic';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const item = {
    hidden: { y: 150, opacity: 0, rotate: 5 },
    show: { y: 0, opacity: 1, rotate: 0, transition: { type: "spring", stiffness: 60, damping: 15, mass: 1 } }
  };

  return (
    <section className="section-padding" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '150px' }}>
      {/* Animated BG Graphic */}
      <div className="bg-glow" style={{ position: 'absolute', right: '-10%', top: '20%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, var(--accent-purple) 0%, transparent 70%)', opacity: 0.15, filter: 'blur(100px)', zIndex: -1 }}></div>
      <div className="bg-glow" style={{ position: 'absolute', left: '-10%', bottom: '10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, var(--accent-blue) 0%, transparent 70%)', opacity: 0.15, filter: 'blur(80px)', zIndex: -1 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div variants={container} initial="hidden" animate="show" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ overflow: 'hidden', marginBottom: '1.5rem', paddingBottom: '10px' }}>
            <motion.h1 variants={item} className="heading-xl">
              We Build <span className="text-gradient">Digital</span> Experiences That <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--text-secondary)' }}>Grow</span> Businesses.
            </motion.h1>
          </div>
          <div style={{ overflow: 'hidden', marginBottom: '3rem' }}>
            <motion.p variants={item} className="text-body" style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)', maxWidth: '700px', margin: '0 auto' }}>
              Zenthycs is a new-age digital agency helping modern businesses scale through high-converting websites, powerful Shopify stores, and strategic social media management.
            </motion.p>
          </div>

          <motion.div variants={item} style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Magnetic>
              <a href="#inquiries" className="btn-primary" style={{ padding: '1.2rem 2.8rem', fontSize: '1.1rem' }}>
                Start Your Project <ArrowRight size={20} />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#services" className="btn-secondary" style={{ padding: '1.2rem 2.8rem', fontSize: '1.1rem' }}>
                View Services
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
