import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export default function Inquiries() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'website',
    budget: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000); // Reset after 5s
  };

  return (
    <section id="inquiries" className="section-padding container" style={{ position: 'relative' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <motion.span 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          style={{ textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-purple)', fontWeight: 600, fontSize: '0.9rem' }}
        >
          Start a Project
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="heading-l" 
          style={{ marginTop: '1rem' }}
        >
          Got a project in mind? <span className="text-gradient">Let's talk.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-body" style={{ marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0' }}
        >
          Fill out the form below and our team will get back to you within 24 hours to discuss your project requirements.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-panel"
        style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '200px', height: '200px', background: 'var(--accent-blue)', filter: 'blur(100px)', opacity: 0.1, zIndex: 0 }} />
        
        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            style={{ textAlign: 'center', padding: '4rem 2rem', position: 'relative', zIndex: 1 }}
          >
            <CheckCircle size={64} color="var(--accent-neon)" style={{ margin: '0 auto 1.5rem' }} />
            <h3 className="heading-m" style={{ marginBottom: '1rem' }}>Thank You!</h3>
            <p className="text-body">Your inquiry has been successfully submitted. We'll be in touch shortly to discuss your project.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="name" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="John Doe"
                  style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-purple)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="email" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="john@example.com"
                  style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-purple)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="service" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Service Required</label>
                <select 
                  id="service" 
                  name="service" 
                  value={formData.service} 
                  onChange={handleChange}
                  style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', fontSize: '1rem', outline: 'none', cursor: 'pointer', appearance: 'none' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-purple)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                >
                  <option value="website" style={{ background: '#13131E', color: 'white' }}>Website Development</option>
                  <option value="shopify" style={{ background: '#13131E', color: 'white' }}>Shopify Store Development</option>
                  <option value="wordpress" style={{ background: '#13131E', color: 'white' }}>WordPress Development</option>
                  <option value="social" style={{ background: '#13131E', color: 'white' }}>Social Media Management</option>
                  <option value="other" style={{ background: '#13131E', color: 'white' }}>Other / Custom Request</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="budget" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Expected Budget</label>
                <select 
                  id="budget" 
                  name="budget" 
                  value={formData.budget} 
                  onChange={handleChange}
                  style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', fontSize: '1rem', outline: 'none', cursor: 'pointer', appearance: 'none' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-purple)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                >
                  <option value="" disabled style={{ background: '#13131E', color: 'white' }}>Select your budget</option>
                  <option value="15k-30k" style={{ background: '#13131E', color: 'white' }}>₹15,000 - ₹30,000</option>
                  <option value="30k-50k" style={{ background: '#13131E', color: 'white' }}>₹30,000 - ₹50,000</option>
                  <option value="50k-1L" style={{ background: '#13131E', color: 'white' }}>₹50,000 - ₹1,00,000</option>
                  <option value="1L+" style={{ background: '#13131E', color: 'white' }}>₹1,00,000+</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="message" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Project Details</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                placeholder="Tell us a little bit about your project..."
                rows="5"
                style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', fontSize: '1rem', outline: 'none', resize: 'vertical', transition: 'border-color 0.3s' }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-purple)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              ></textarea>
            </div>

            <button type="submit" className="btn-primary" style={{ marginTop: '1rem', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', width: '100%', padding: '1.2rem', fontSize: '1.1rem' }}>
              Submit Inquiry <Send size={20} />
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
