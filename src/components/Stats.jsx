import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

function Counter({ from, to, suffix }) {
  const nodeRef = useRef();
  const isInView = useInView(nodeRef, { once: true, margin: '-50px' });

  useEffect(() => {
    const node = nodeRef.current;
    if (isInView && node) {
      const controls = animate(from, to, {
        duration: 2,
        ease: 'easeOut',
        onUpdate(value) {
          node.textContent = Math.round(value) + suffix;
        }
      });
      return () => controls.stop();
    }
  }, [from, to, isInView, suffix]);

  return <span ref={nodeRef} style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>{from}{suffix}</span>;
}

export default function Stats() {
  const stats = [
    { num: 100, label: 'Websites Built', suffix: '+' },
    { num: 50, label: 'Shopify Stores', suffix: '+' },
    { num: 40, label: 'Social Media Managed', suffix: '+' }
  ];

  return (
    <section className="section-padding container">
      <div className="glass-panel stats-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="bg-glow" style={{ position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)', width: '100%', height: '100%', background: 'radial-gradient(ellipse, var(--accent-purple) 0%, transparent 70%)', opacity: 0.1, filter: 'blur(80px)' }} />

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-l" 
          style={{ marginBottom: '4rem' }}
        >
          Why Choose <span className="text-gradient">Zenthycs</span>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', width: '100%', gap: '3rem' }}>
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <Counter from={0} to={stat.num} suffix={stat.suffix} />
              <p className="text-body" style={{ marginTop: '0.8rem', fontSize: '1.2rem', color: 'var(--accent-neon)' }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
