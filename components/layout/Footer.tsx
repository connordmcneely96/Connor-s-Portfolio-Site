'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  navigation: [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ],
  projects: [
    { href: '/portfolio?category=mechanical', label: 'Mechanical Engineering' },
    { href: '/portfolio?category=ai-ml', label: 'AI/ML Projects' },
    { href: '/portfolio?category=fullstack', label: 'Full-Stack Development' },
  ],
  services: [
    { href: '/services#ai-development', label: 'AI Development' },
    { href: '/services#engineering', label: 'Engineering Consultation' },
    { href: '/services#fullstack', label: 'Full-Stack Development' },
  ],
};

const socialLinks = [
  {
    href: 'https://github.com/connordmcneely96',
    icon: Github,
    label: 'GitHub',
  },
  {
    href: 'https://linkedin.com/in/connordmcneely',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'mailto:connor@leadershiplegacy.io',
    icon: Mail,
    label: 'Email',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 border-t border-steel-800/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-primary-600 flex items-center justify-center shadow-glow-cyan">
                <span className="text-white font-bold text-xl">CM</span>
              </div>
              <div>
                <span className="text-white font-display font-bold text-xl">Connor McNeely</span>
                <span className="block text-steel-400 text-sm">Mechanical Engineer × AI Developer</span>
              </div>
            </Link>
            <p className="text-steel-400 leading-relaxed mb-6 max-w-sm">
              Bridging mechanical engineering expertise with AI innovation.
              Building intelligent systems that transform how engineers work.
            </p>
            <div className="flex items-center gap-2 text-steel-500 text-sm">
              <MapPin className="w-4 h-4" />
              <span>El Dorado, Arkansas</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-steel-400 hover:text-accent-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Projects</h4>
            <ul className="space-y-3">
              {footerLinks.projects.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-steel-400 hover:text-accent-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-steel-400 hover:text-accent-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-steel-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-steel-500 text-sm">
              &copy; {currentYear} Connor McNeely. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-steel-500 hover:text-accent-400 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                  <span className="text-sm hidden sm:inline">{link.label}</span>
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-steel-500 hover:text-accent-400 transition-colors text-sm"
            >
              Back to top
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
