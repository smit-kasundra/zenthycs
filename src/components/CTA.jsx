import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import Magnetic from './Magnetic';

export default function CTA() {
  return (
    <section id="cta" className="section-padding container">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-panel" 
        style={{ 
          padding: '6rem 3rem', 
          textAlign: 'center', 
          position: 'relative', 
          overflow: 'hidden',
          background: 'linear-gradient(135deg, rgba(5,5,8,0.9), rgba(13,13,20,0.9))'
        }}
      >
        <div className="bg-glow" style={{ position: 'absolute', top: '-20%', left: '-10%', width: '300px', height: '300px', background: 'var(--accent-purple)', filter: 'blur(100px)', opacity: 0.2 }} />
        <div className="bg-glow" style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '400px', height: '400px', background: 'var(--accent-neon)', filter: 'blur(120px)', opacity: 0.15 }} />

        <h2 className="heading-xl" style={{ margin: '0 auto', maxWidth: '900px', position: 'relative', zIndex: 1 }}>
          Let's Build Something <span className="text-gradient">Powerful</span> For Your Business.
        </h2>
        
        <p className="text-body" style={{ marginTop: '2rem', marginBottom: '4rem', fontSize: '1.2rem', position: 'relative', zIndex: 1 }}>
          Ready to transform your digital presence? We're here to help.
        </p>

        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
          <Magnetic>
            <a href="#inquiries" className="btn-primary" style={{ padding: '1.2rem 3rem' }}>
              Start a Project <ArrowRight size={20} />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#" className="btn-secondary" style={{ padding: '1.2rem 3rem' }}>
              <Mail size={20} /> Contact Us
            </a>
          </Magnetic>
        </div>
      </motion.div>
    </section>
  );
}
