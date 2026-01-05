'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

type NavLink = { href: string; label: string }

const LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/coaching', label: 'Coaching' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/community', label: 'Community' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/contact', label: 'Contact' },
]

const DARK_ROUTES = new Set(['/about', '/portfolio', '/contact', '/dashboard'])

export default function LegacyShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const themeClass = useMemo(() => (DARK_ROUTES.has(pathname) ? 'theme-dark' : 'theme-light'), [pathname])

  return (
    <div className={themeClass}>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Connor Mcneely</div>
          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={pathname === l.href ? 'active' : ''}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="hamburger"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((v) => !v)}
          >
            <span
              style={
                isOpen
                  ? { transform: 'rotate(45deg) translate(5px, 5px)' }
                  : undefined
              }
            />
            <span style={isOpen ? { opacity: 0 } : undefined} />
            <span
              style={
                isOpen
                  ? { transform: 'rotate(-45deg) translate(7px, -6px)' }
                  : undefined
              }
            />
          </button>
        </div>
      </nav>

      <main>{children}</main>

      <footer>
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-column">
              <h4>Connor Mcneely</h4>
              <p>Leadership &amp; Legacy</p>
            </div>
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/coaching">Coaching</Link>
                </li>
                <li>
                  <Link href="/community">Community</Link>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Connect</h4>
              <ul>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/portfolio">Portfolio</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Connor Mcneely. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

