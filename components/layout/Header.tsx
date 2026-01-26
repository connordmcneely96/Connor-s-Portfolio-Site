'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Download,
  Github,
  Linkedin,
  ChevronRight,
} from 'lucide-react';
import { trackResumeDownload } from '@/app/utils/analytics';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-primary-900/95 backdrop-blur-xl shadow-lg border-b border-steel-800/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500 to-primary-600 flex items-center justify-center shadow-glow-cyan group-hover:shadow-glow-cyan-lg transition-shadow">
              <span className="text-white font-bold text-lg">CM</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-display font-bold text-lg">Connor McNeely</span>
              <span className="block text-steel-400 text-xs font-mono">ME × AI Developer</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? 'text-accent-400'
                    : 'text-steel-300 hover:text-white hover:bg-steel-800/50'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-400"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Resume Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-steel-300 hover:text-white hover:bg-steel-800/50 transition-all">
                <Download className="w-4 h-4" />
                <span className="text-sm font-medium">Resume</span>
              </button>
              <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-primary-800 border border-steel-700/50 rounded-xl shadow-xl p-2 min-w-[200px]">
                  <a
                    href="/resumes/Mechanical_DrafterModeler_Automation%20Resume.docx.pdf"
                    download
                    onClick={() => trackResumeDownload('mechanical')}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-steel-800/50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-secondary-500/20 flex items-center justify-center">
                      <span className="text-secondary-400 text-xs font-bold">ME</span>
                    </div>
                    <div>
                      <span className="block text-white text-sm font-medium">Mechanical</span>
                      <span className="block text-steel-500 text-xs">Engineering Resume</span>
                    </div>
                  </a>
                  <a
                    href="/resumes/AI%20Developer_Fullstack%20Developer_AIML_Engineer%20Resume.docx.pdf"
                    download
                    onClick={() => trackResumeDownload('ai-dev')}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-steel-800/50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent-500/20 flex items-center justify-center">
                      <span className="text-accent-400 text-xs font-bold">AI</span>
                    </div>
                    <div>
                      <span className="block text-white text-sm font-medium">AI/Dev</span>
                      <span className="block text-steel-500 text-xs">Developer Resume</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 pl-3 border-l border-steel-700/50">
              <a
                href="https://github.com/connordmcneely96"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-steel-400 hover:text-white hover:bg-steel-800/50 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/connordmcneely"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-steel-400 hover:text-white hover:bg-steel-800/50 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="ml-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent-500 to-primary-600 text-white font-semibold text-sm shadow-glow-cyan hover:shadow-glow-cyan-lg transition-all"
            >
              Work With Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-steel-300 hover:text-white hover:bg-steel-800/50 transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-primary-900/98 backdrop-blur-xl border-t border-steel-800/50 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                      pathname === link.href
                        ? 'bg-accent-500/10 text-accent-400'
                        : 'text-steel-300 hover:bg-steel-800/50 hover:text-white'
                    }`}
                  >
                    <span className="font-medium">{link.label}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Resume Links */}
              <div className="pt-4 border-t border-steel-800/50 space-y-2">
                <p className="px-4 text-xs font-medium text-steel-500 uppercase tracking-wider">Download Resume</p>
                <a
                  href="/resumes/Mechanical_DrafterModeler_Automation%20Resume.docx.pdf"
                  download
                  onClick={() => trackResumeDownload('mechanical')}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary-500/10 text-secondary-400 hover:bg-secondary-500/20 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span className="font-medium">Mechanical Engineering Resume</span>
                </a>
                <a
                  href="/resumes/AI%20Developer_Fullstack%20Developer_AIML_Engineer%20Resume.docx.pdf"
                  download
                  onClick={() => trackResumeDownload('ai-dev')}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-accent-500/10 text-accent-400 hover:bg-accent-500/20 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span className="font-medium">AI/Developer Resume</span>
                </a>
              </div>

              {/* Mobile Social Links */}
              <div className="pt-4 border-t border-steel-800/50 flex items-center gap-4">
                <a
                  href="https://github.com/connordmcneely96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-steel-400 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/connordmcneely"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-steel-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full py-4 rounded-xl bg-gradient-to-r from-accent-500 to-primary-600 text-white font-semibold text-center shadow-glow-cyan"
                >
                  Work With Me
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
