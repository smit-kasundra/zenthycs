import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)', paddingTop: '5rem', paddingBottom: '2rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
        
        <div style={{ gridColumn: '1 / -1', '@media (min-width: 768px)': { gridColumn: 'span 2' } }}>
          <a href="#" className="interactive" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '1rem' }}>
            <img src="/logo.svg" alt="Zenthycs Logo" style={{ height: '50px', objectFit: 'contain' }} />
          </a>
          <p className="text-body" style={{ maxWidth: '300px' }}>
            A modern digital solutions company helping businesses grow online across the globe.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            {[<Twitter size={20} />, <Instagram size={20} />, <Linkedin size={20} />, <Facebook size={20} />].map((icon, i) => (
              <a key={i} href="#" className="interactive" style={{ 
                width: '40px', height: '40px', borderRadius: '50%', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s', color: 'var(--text-secondary)'
              }} onMouseOver={e => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.background = 'var(--accent-purple)';
                e.currentTarget.style.borderColor = 'var(--accent-purple)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }} onMouseOut={e => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.background = 'var(--glass-bg)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.5rem' }}>Quick Links</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {['About Us', 'Our Process', 'Portfolio', 'Careers', 'Contact'].map((link, i) => (
              <li key={i}>
                <a href="#" className="text-body interactive" style={{ transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--accent-neon)'} onMouseOut={e => e.target.style.color='var(--text-secondary)'}>{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.5rem' }}>Services</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {['Website Development', 'Shopify Stores', 'WordPress Sites', 'Social Media Management', 'SEO Optimization'].map((link, i) => (
              <li key={i}>
                <a href="#" className="text-body interactive" style={{ transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--accent-neon)'} onMouseOut={e => e.target.style.color='var(--text-secondary)'}>{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.5rem' }}>Contact Us</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
            <li className="interactive">zenthycs@gmail.com</li>
            <li className="interactive">+91 9313423147</li>
            <li className="interactive">+91 9157388988</li>
            <li>Gandhinagar, 382015,<br />Gujarat, India</li>
          </ul>
        </div>
      </div>

      <div className="container" style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <p className="text-body" style={{ fontSize: '0.9rem' }}>&copy; {currentYear} Zenthycs Agency. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#" className="text-body interactive" style={{ fontSize: '0.9rem' }}>Privacy Policy</a>
          <a href="#" className="text-body interactive" style={{ fontSize: '0.9rem' }}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
