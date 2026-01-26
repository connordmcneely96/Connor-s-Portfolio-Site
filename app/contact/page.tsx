'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Send,
  CheckCircle2,
  Clock,
  UserCheck,
  MessageCircle,
  Github,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Input, Textarea, Select } from '@/components/ui/Input';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Construct mailto URL with form data
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
${formData.phone ? `Phone: ${formData.phone}\n` : ''}
Topic: ${formData.subject}

Message:
${formData.message}
    `.trim();

    const mailtoUrl = `mailto:connordmcneely@gmail.com?subject=${encodeURIComponent(`Portfolio Contact: ${formData.subject}`)}&body=${encodeURIComponent(emailBody)}`;

    // Open email client
    window.location.href = mailtoUrl;

    // Show success message
    setSubmitted(true);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'connordmcneely@gmail.com',
      link: 'mailto:connordmcneely@gmail.com',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description: 'linkedin.com/in/connordmcneely',
      link: 'https://linkedin.com/in/connordmcneely',
    },
    {
      icon: Github,
      title: 'GitHub',
      description: 'github.com/connordmcneely96',
      link: 'https://github.com/connordmcneely96',
    },
  ];

  const expectations = [
    {
      icon: Clock,
      text: 'Response within 24 hours on business days',
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

  const subjectOptions = [
    { value: '', label: 'Select a topic' },
    { value: 'AI Development Project', label: 'AI Development Project' },
    { value: 'Mechanical Engineering Consulting', label: 'Mechanical Engineering Consulting' },
    { value: 'Full-Stack Development', label: 'Full-Stack Development' },
    { value: 'Full-Time Opportunity', label: 'Full-Time Opportunity' },
    { value: 'Technical Consulting', label: 'Technical Consulting' },
    { value: 'General Inquiry', label: 'General Inquiry' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid bg-grid-50 opacity-10" />
        <div className="absolute top-20 -left-40 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -right-40 w-80 h-80 bg-primary-600/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Badge variant="accent" className="mb-6">
              Let's Connect
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Let's Build Something
            </h1>
            <p className="text-xl text-steel-300 max-w-3xl mx-auto">
              Whether you have a specific project in mind or just want to explore possibilities,
              I'm happy to talk. No sales pitch—just a conversation about what you're trying to accomplish.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <Card padding="lg">
                <h2 className="text-2xl font-bold text-white mb-2">Let's Connect</h2>
                <div className="flex items-center gap-2 text-steel-400 mb-6">
                  <MapPin className="w-4 h-4" />
                  <span>Based in El Dorado, Arkansas (CST)</span>
                </div>
                <p className="text-steel-300 mb-8">
                  Available for freelance projects, full-time opportunities,
                  and technical consulting. Whether you need AI-powered tools,
                  mechanical engineering expertise, or full-stack development—let's talk.
                </p>

                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={method.title}
                      href={method.link}
                      target={method.title !== 'Email' ? '_blank' : undefined}
                      rel={method.title !== 'Email' ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-steel-800/30 border border-steel-700/50 hover:border-accent-500/50 hover:bg-steel-800/50 transition-all group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-primary-600/20 flex items-center justify-center group-hover:from-accent-500/30 group-hover:to-primary-600/30 transition-colors">
                        <method.icon className="w-6 h-6 text-accent-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold">{method.title}</h3>
                        <p className="text-sm text-steel-400">{method.description}</p>
                      </div>
                      {method.title !== 'Email' && (
                        <ExternalLink className="w-4 h-4 text-steel-500 group-hover:text-accent-400 transition-colors" />
                      )}
                    </motion.a>
                  ))}
                </div>
              </Card>

              <Card variant="gradient" padding="lg">
                <h3 className="text-xl font-bold text-white mb-6">What to Expect</h3>
                <ul className="space-y-4">
                  {expectations.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-3 text-steel-200"
                    >
                      <div className="w-8 h-8 rounded-lg bg-accent-500/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-accent-400" />
                      </div>
                      <span>{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card padding="lg">
                <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
                <p className="text-steel-400 text-sm mb-6">
                  Fill out the form below and your email client will open with the message ready to send.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-green-400" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Message sent!</h4>
                    <p className="text-steel-400 mb-6">
                      I'll get back to you within 24 hours. Talk soon.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setSubmitted(false)}
                    >
                      Fill Out Again
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                      label="Full Name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                    />

                    <Input
                      label="Email Address"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                    />

                    <Input
                      label="Phone Number"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(Optional)"
                    />

                    <Select
                      label="I'm Interested In"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      options={subjectOptions}
                    />

                    <Textarea
                      label="Your Message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project or opportunity..."
                    />

                    <Button
                      type="submit"
                      fullWidth
                      size="lg"
                      leftIcon={<Send className="w-5 h-5" />}
                    >
                      Send It →
                    </Button>

                    <p className="text-xs text-steel-500 text-center">
                      Or email me directly at{' '}
                      <a href="mailto:connordmcneely@gmail.com" className="text-accent-400 hover:underline">
                        connordmcneely@gmail.com
                      </a>
                    </p>
                  </form>
                )}
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
