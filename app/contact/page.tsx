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
  Loader2,
  AlertCircle,
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
    honeypot: '', // Bot trap
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '', honeypot: '' });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
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
              Get in Touch
            </h1>
            <p className="text-xl text-steel-300 max-w-3xl mx-auto">
              Have a project in mind or want to discuss an opportunity?
              I'd love to hear from you.
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
                  <span>Based in Lafayette, LA</span>
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
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-steel-800/30 border border-steel-700/50 hover:border-accent-500/50 hover:bg-steel-800/50 transition-all group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-primary-600/20 flex items-center justify-center group-hover:from-accent-500/30 group-hover:to-primary-600/30 transition-colors">
                        <method.icon className="w-6 h-6 text-accent-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{method.title}</h3>
                        <p className="text-sm text-steel-400">{method.description}</p>
                      </div>
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
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-green-400" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                    <p className="text-steel-400 mb-6">
                      Thank you for reaching out. I'll get back to you within 24-48 hours.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setSubmitStatus('idle')}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot field - hidden from users */}
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

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

                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400"
                      >
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <span>{errorMessage || 'Something went wrong. Please try again.'}</span>
                      </motion.div>
                    )}

                    <Button
                      type="submit"
                      fullWidth
                      size="lg"
                      disabled={isSubmitting}
                      leftIcon={
                        isSubmitting ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <Send className="w-5 h-5" />
                        )
                      }
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
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
