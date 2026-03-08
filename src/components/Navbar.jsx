import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '1rem 0' : '2rem 0',
        background: scrolled ? 'rgba(5, 5, 8, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" className="interactive" style={{ fontSize: '1.8rem', fontWeight: 800, letterSpacing: '-1px' }}>
          Zenthycs<span style={{ color: 'var(--accent-neon)' }}>.</span>
        </a>
        <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center', '@media (max-width: 768px)': { display: 'none' }}}>
          {['About', 'Services', 'Process', 'Portfolio'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="interactive text-body" style={{ fontWeight: 500, transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='white'} onMouseOut={e => e.target.style.color='var(--text-secondary)'}>
                {item}
              </a>
            </li>
          ))}
          <li>
            <a href="#inquiries" className="btn-primary interactive" style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}>
              Start Project
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}
