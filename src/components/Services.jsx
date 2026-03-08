import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, ShoppingBag, LayoutTemplate, Share2, ArrowRight, X, CheckCircle } from 'lucide-react';
import gsap from 'gsap';

const services = [
  {
    title: 'Website Development',
    desc: 'Custom websites for businesses. Fast, SEO optimized, modern UI.',
    icon: <Monitor size={40} color="var(--accent-purple)" />,
    details: 'Our Website Development service covers everything from initial concept to launch. We use modern frameworks to build fast, scalable, and secure web applications. We ensure cross-browser compatibility, responsive design, and cutting-edge SEO practices to maximize your digital footprint.',
    works: ['Corporate Websites', 'High-Converting Landing Pages', 'Complex Web Applications', 'SaaS Platforms']
  },
  {
    title: 'Shopify Store Development',
    desc: 'Professional Shopify stores. Conversion optimized layouts.',
    icon: <ShoppingBag size={40} color="var(--accent-blue)" />,
    details: 'We build high-converting Shopify stores tailored to your brand identity. Our approach focuses on user experience (UX) to reduce cart abandonment and increase lifetime customer value. We perform custom theme development to ensure your store stands out.',
    works: ['Custom Theme Design', 'Payment & App Integrations', 'Store Migrations', 'Performance Optimization']
  },
  {
    title: 'WordPress Development',
    desc: 'Custom WordPress websites. eCommerce & business websites.',
    icon: <LayoutTemplate size={40} color="var(--accent-neon)" />,
    details: 'Leverage the power of the world\'s most popular CMS. We develop custom WordPress themes from scratch, avoiding bloated pre-made templates. Our WordPress solutions are highly secure, easily manageable, and customized for bespoke requirements including WooCommerce.',
    works: ['Custom UI Themes', 'Custom Plugin Development', 'WooCommerce Setup', 'Speed & Security Optimization']
  },
  {
    title: 'Social Media Management',
    desc: 'Professional social media handles. Brand growth and engagement strategies.',
    icon: <Share2 size={40} color="white" />,
    details: 'Transform your social media presence into a powerful lead-generation tool. We handle everything from content creation and graphic design to community management. Our strategies are data-driven, maximizing engagement and reach across all platforms.',
    works: ['Content Creation Strategy', 'Community Management', 'Paid Ad Campaigns', 'Analytics & Growth Reporting']
  }
];

export default function Services() {
  const cardsRef = useRef([]);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    cardsRef.current.forEach((el, index) => {
      if (!el) return;
      
      const onEnter = () => {
        gsap.to(el, { y: -15, scale: 1.02, duration: 0.4, ease: 'power2.out', boxShadow: '0 20px 40px rgba(139, 92, 246, 0.2)' });
      };
      
      const onLeave = () => {
        gsap.to(el, { y: 0, scale: 1, duration: 0.4, ease: 'power2.out', boxShadow: 'none' });
      };

      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);

      return () => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      };
    });
  }, []);

  useEffect(() => {
    if (activeService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [activeService]);

  return (
    <section id="services" className="section-padding container" style={{ position: 'relative' }}>
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <motion.span 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          style={{ textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-purple)', fontWeight: 600, fontSize: '0.9rem' }}
        >
          Our Expertise
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="heading-l" 
          style={{ marginTop: '1rem' }}
        >
          Custom Digital <span className="text-gradient">Solutions</span>
        </motion.h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div 
              ref={(el) => cardsRef.current[idx] = el}
              onClick={() => setActiveService(service)}
              className="glass-panel interactive"
              style={{
                padding: '3rem 2rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ marginBottom: '1.5rem', display: 'inline-block', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '16px' }}>
                {service.icon}
              </div>
              <h3 className="heading-m" style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>
                {service.title}
              </h3>
              <p className="text-body" style={{ flexGrow: 1, marginBottom: '2rem' }}>
                {service.desc}
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-purple)', fontWeight: 500, marginTop: 'auto' }}>
                Learn more <ArrowRight size={16} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(5, 5, 8, 0.8)', backdropFilter: 'blur(8px)', padding: '1rem' }}
            onClick={() => setActiveService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel"
              style={{ width: '100%', maxWidth: '600px', padding: '3rem', position: 'relative', border: '1px solid var(--accent-purple)', background: 'var(--bg-secondary)', borderRadius: '24px' }}
            >
              <button 
                onClick={() => setActiveService(null)}
                className="interactive"
                style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer', transition: 'background 0.3s' }}
                onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              >
                <X size={20} />
              </button>

              <div style={{ display: 'inline-block', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', marginBottom: '1.5rem' }}>
                {activeService.icon}
              </div>
              
              <h3 className="heading-m" style={{ marginBottom: '1rem', color: 'white', fontSize: '2rem' }}>{activeService.title}</h3>
              <p className="text-body" style={{ marginBottom: '2.5rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
                {activeService.details}
              </p>
              
              <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--accent-neon)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>What we do</h4>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                {activeService.works.map((work, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-primary)', fontSize: '1rem' }}>
                    <CheckCircle size={18} color="var(--accent-purple)" style={{ flexShrink: 0 }} />
                    {work}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
