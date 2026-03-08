import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  { num: '01', title: 'Strategy', desc: 'Understanding your business goals and targeting the right audience.' },
  { num: '02', title: 'Design', desc: 'Creating premium, user-centric, and highly converting UI/UX designs.' },
  { num: '03', title: 'Development', desc: 'Building scalable and robust applications with modern technologies.' },
  { num: '04', title: 'Launch', desc: 'Deploying your digital experience seamlessly to the world.' },
  { num: '05', title: 'Growth', desc: 'Managing your digital presence with strategic growth models.' }
];

export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="section-padding container" ref={ref}>
      <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
        <h2 className="heading-l">
          The <span className="text-gradient">Zenthycs</span> Process
        </h2>
        <p className="text-body" style={{ marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0' }}>
          A streamlined approach to transforming your ideas into market-leading digital realities.
        </p>
      </div>

      <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
        {/* Connection line */}
        <div className="process-line" style={{ position: 'absolute', top: 0, bottom: 0, width: '2px', background: 'var(--glass-border)' }}>
          <motion.div style={{ height: lineHeight, background: 'linear-gradient(to bottom, var(--accent-purple), var(--accent-neon))', width: '100%' }} />
        </div>

        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            style={{ display: 'flex', alignItems: 'flex-start', marginBottom: idx !== steps.length - 1 ? '4rem' : '0', position: 'relative' }}
          >
            <div className="process-circle" style={{ 
                borderRadius: '50%', 
                background: 'var(--bg-secondary)', 
                border: '1px solid var(--accent-purple)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontWeight: 800, 
                color: 'var(--accent-purple)',
                zIndex: 2,
                flexShrink: 0
              }}>
              {step.num}
            </div>
            
            <div className="glass-panel interactive process-card" style={{ flexGrow: 1, transition: 'all 0.3s ease' }} onMouseOver={e => e.currentTarget.style.transform='translateX(10px)'} onMouseOut={e => e.currentTarget.style.transform='translateX(0)'}>
              <h3 className="heading-m" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{step.title}</h3>
              <p className="text-body">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
