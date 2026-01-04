'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import { Download } from 'lucide-react'

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/community', label: 'Community' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/contact', label: 'Contact' },
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
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="resume-buttons">
            <a
              href="/Connor_McNeely_ME_Resume.pdf"
              download
              className="resume-btn resume-btn-me"
              title="Download Mechanical Engineering Resume"
            >
              <Download className="w-4 h-4" />
              <span>ME Resume</span>
            </a>
            <a
              href="/Connor_McNeely_AI_Dev_Resume.pdf"
              download
              className="resume-btn resume-btn-ai"
              title="Download AI/Developer Resume"
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
