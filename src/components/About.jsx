import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-padding container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <h2 className="heading-l" style={{ marginBottom: '1.5rem' }}>
          Redefining <span className="text-gradient">Digital Success</span>
        </h2>
        <p className="text-body" style={{ marginBottom: '1.5rem', fontSize: '1.2rem', color: 'var(--text-primary)' }}>
          Zenthycs is a modern digital solutions company that helps businesses grow online through powerful websites, scalable eCommerce stores, and strategic social media management.
        </p>
        <p className="text-body" style={{ marginBottom: '2rem' }}>
          We blend award-winning design with cutting-edge technology to build digital experiences that not only look stunning but drive measurable growth.
        </p>
        
        <div style={{ display: 'flex', gap: '2rem' }}>
          <div>
            <h3 className="heading-m" style={{ color: 'var(--accent-purple)' }}>5+</h3>
            <p className="text-body" style={{ fontSize: '0.9rem' }}>Years Experience</p>
          </div>
          <div>
            <h3 className="heading-m" style={{ color: 'var(--accent-blue)' }}>24/7</h3> 
            <p className="text-body" style={{ fontSize: '0.9rem' }}>Premium Support</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ position: 'relative' }}
      >
        <div className="glass-panel" style={{ padding: '3rem', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '150px', height: '150px', background: 'var(--accent-neon)', filter: 'blur(50px)', zIndex: -1, opacity: 0.5 }}></div>
          <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '150px', height: '150px', background: 'var(--accent-blue)', filter: 'blur(50px)', zIndex: -1, opacity: 0.5 }}></div>
          
          <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" alt="Team collaborating" style={{ width: '100%', borderRadius: '16px', filter: 'grayscale(50%) contrast(1.2)' }} />
          
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="glass-panel" 
            style={{ position: 'absolute', bottom: '1rem', right: '-1rem', padding: '1rem', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}
          >
            <p style={{ fontWeight: 600, fontSize: '1.2rem' }}>Innovative.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
