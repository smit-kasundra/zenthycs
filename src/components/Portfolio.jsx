import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  { img: '/fintech.png', title: 'Fintech Dashboard', cat: 'Website Development' },
  { img: '/aura.png', title: 'Aura Beauty', cat: 'Shopify Store' },
  { img: '/nexus.png', title: 'Nexus Enterprise', cat: 'WordPress Development' },
  { img: '/vibe.png', title: 'Vibe Culture', cat: 'Social Media Management' }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
        <div>
          <h2 className="heading-l">Selected <span className="text-gradient">Work</span></h2>
          <p className="text-body" style={{ marginTop: '1rem', maxWidth: '500px' }}>Explore our recent projects and see how we help brands achieve digital excellence.</p>
        </div>
        <a href="#" className="btn-secondary interactive" style={{ display: 'none', '@media (min-width: 768px)': { display: 'inline-flex' }}}>View All Projects</a>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="interactive"
            style={{ position: 'relative', overflow: 'hidden', borderRadius: '24px', cursor: 'pointer', height: '400px' }}
            onMouseOver={e => {
              const img = e.currentTarget.querySelector('img');
              const overlay = e.currentTarget.querySelector('.overlay');
              const details = e.currentTarget.querySelector('.details');
              img.style.transform = 'scale(1.1)';
              overlay.style.opacity = 1;
              details.style.transform = 'translateY(0)';
              details.style.opacity = 1;
            }}
            onMouseOut={e => {
              const img = e.currentTarget.querySelector('img');
              const overlay = e.currentTarget.querySelector('.overlay');
              const details = e.currentTarget.querySelector('.details');
              img.style.transform = 'scale(1)';
              overlay.style.opacity = 0;
              details.style.transform = 'translateY(20px)';
              details.style.opacity = 0;
            }}
          >
            <img 
              src={proj.img} 
              alt={proj.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }} 
            />
            
            <div className="overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)', opacity: 0, transition: 'opacity 0.4s ease' }} />
            
            <div className="details" style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem', opacity: 0, transform: 'translateY(20px)', transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <span style={{ fontSize: '0.9rem', color: 'var(--accent-neon)', fontWeight: 600, letterSpacing: '1px' }}>{proj.cat}</span>
                  <h3 className="heading-m" style={{ fontSize: '2rem', margin: '0.2rem 0 0', color: 'white' }}>{proj.title}</h3>
                </div>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ArrowUpRight color="black" size={24} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
