'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/coaching', label: 'Coaching' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/community', label: 'Community' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Connor Mcneely</div>
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
