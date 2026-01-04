'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Linkedin,
  Send,
  CheckCircle2,
  Clock,
  UserCheck,
  MessageCircle,
  Sparkles,
  Github
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.interest || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    alert('Thank you for your message! We will get back to you within 24-48 hours.');
    setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'connordmcneely@gmail.com',
      link: 'mailto:connordmcneely@gmail.com',
      gradient: 'from-brand-cyan to-brand-cyan-dark',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description: 'linkedin.com/in/connordmcneely',
      link: 'https://linkedin.com/in/connordmcneely',
      gradient: 'from-brand-blue-electric to-brand-cyan',
    },
    {
      icon: Github,
      title: 'GitHub',
      description: 'github.com/connordmcneely96',
      link: 'https://github.com/connordmcneely96',
      gradient: 'from-success to-brand-cyan',
    },
  ];

  const expectations = [
    {
      icon: Clock,
      text: 'Response within 24-48 hours',
    },
    {
      icon: MessageCircle,
      text: 'Available for freelance projects',
    },
    {
      icon: UserCheck,
      text: 'Open to full-time opportunities',
    },
    {
      icon: CheckCircle2,
      text: 'Collaborative & professional',
    },
  ];

  return (
    <div className="min-h-screen bg-neural-dark">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden bg-gradient-to-br from-neural-dark via-neural-slate to-neural-dark pt-32 pb-20"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #00B8E6 1px, transparent 1px), linear-gradient(to bottom, #00B8E6 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
        </div>
        <div className="absolute top-20 -left-40 w-80 h-80 bg-brand-cyan opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 -right-40 w-80 h-80 bg-brand-blue-electric opacity-20 rounded-full blur-3xl animate-pulse" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 mb-6">
              <Sparkles className="w-4 h-4 text-brand-cyan" />
              <span className="text-sm font-medium text-brand-cyan">Let's Connect</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">Let's Work Together</h1>
            <p className="text-xl md:text-2xl text-circuit-silver max-w-3xl mx-auto">Building innovative solutions with AI/ML and full-stack development</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-neural-slate/60 backdrop-blur-xl border border-circuit-silver/20 rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
              <p className="text-circuit-silver text-lg mb-8">
                Based in Lafayette, LA. Available for freelance projects, full-time opportunities, and technical consulting.
              </p>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 8 }}
                    className="group flex items-start gap-4 p-4 rounded-xl bg-neural-dark/40 border border-circuit-silver/10 hover:border-brand-cyan/50 hover:bg-neural-dark/60 transition-all duration-300"
                  >
                    <a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 w-full"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center shadow-glow-cyan flex-shrink-0`}>
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{method.title}</h3>
                        <p className="text-circuit-silver text-sm">{method.description}</p>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-brand-cyan to-brand-blue-electric rounded-2xl p-8 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                  backgroundSize: '30px 30px',
                }} />
              </div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-6">What to Expect</h3>
                <ul className="space-y-4">
                  {expectations.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      className="flex items-center gap-3 text-white"
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      <span>{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-neural-slate/60 backdrop-blur-xl border border-circuit-silver/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-circuit-silver text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-neural-dark border border-circuit-silver/20 text-white placeholder-circuit-silver/50 focus:border-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-circuit-silver text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-neural-dark border border-circuit-silver/20 text-white placeholder-circuit-silver/50 focus:border-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-circuit-silver text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-neural-dark border border-circuit-silver/20 text-white placeholder-circuit-silver/50 focus:border-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                  placeholder="(Optional)"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-circuit-silver text-sm font-medium mb-2">
                  I'm Interested In *
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  value={formData.interest}
                  onChange={(e) => setFormData({...formData, interest: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-neural-dark border border-circuit-silver/20 text-white focus:border-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                >
                  <option value="">Select an option</option>
                  <option value="Freelance Project">Freelance Project</option>
                  <option value="Full-Time Position">Full-Time Position</option>
                  <option value="Technical Consulting">Technical Consulting</option>
                  <option value="AI/ML Development">AI/ML Development</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-circuit-silver text-sm font-medium mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-neural-dark border border-circuit-silver/20 text-white placeholder-circuit-silver/50 focus:border-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue-electric text-white font-semibold shadow-glow-cyan hover:shadow-glow-cyan-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
