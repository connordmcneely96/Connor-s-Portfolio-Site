'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import { Download } from 'lucide-react'

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home', title: 'Home page' },
    { href: '/about', label: 'About', title: 'Background and experience' },
    { href: '/portfolio', label: 'Portfolio', title: 'Software projects & professional experience' },
    { href: '/community', label: 'Community', title: 'Open source & technical writing' },
    { href: '/dashboard', label: 'Dashboard', title: 'Live AI/ML demo application' },
    { href: '/contact', label: 'Contact', title: 'Get in touch' },
  ]

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Connor McNeely</div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? 'active' : ''}
                onClick={() => setIsOpen(false)}
                title={link.title}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="resume-buttons">
            <a
              href="/resumes/Mechanical_DrafterModeler_Automation%20Resume.docx.pdf"
              download="Mechanical_DrafterModeler_Automation Resume"
              className="resume-btn resume-btn-me border-2 border-warning/40 hover:border-warning hover:bg-warning/10"
              title="Download Mechanical / Automation Resume (PDF)"
            >
              <Download className="w-4 h-4" />
              <span>ME Resume</span>
            </a>
            <a
              href="/resumes/AI%20Developer_Fullstack%20Developer_AIML_Engineer%20Resume.docx.pdf"
              download="AI Developer_Fullstack Developer_AIML_Engineer Resume"
              className="resume-btn resume-btn-ai border-2 border-brand-cyan/40 hover:border-brand-cyan hover:bg-brand-cyan/10"
              title="Download AI / Developer Resume (PDF)"
            >
              <Download className="w-4 h-4" />
              <span>AI/Dev Resume</span>
            </a>
          </li>
        </ul>
        <div
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}
