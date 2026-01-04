import type { Metadata } from 'next'
import Navigation from './components/Navigation'
import './globals.css'

export const metadata: Metadata = {
  title: 'Connor McNeely - Full-Stack Developer | AI Engineer',
  description: 'Mechanical Engineer, Full-Stack Developer, and AI/ML Engineer specializing in Next.js, Python, FastAPI, and intelligent systems. Building innovative solutions at the intersection of engineering and software.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="theme-light">
        <Navigation />
        <main>
          {children}
        </main>
        <footer>
          <div className="footer-container">
            <div className="footer-content">
              <div className="footer-column">
                <h4>Connor McNeely</h4>
                <p>Engineering Excellence</p>
              </div>
              <div className="footer-column">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="/about">About</a></li>
                  <li><a href="/portfolio">Portfolio</a></li>
                  <li><a href="/community">Community</a></li>
                  <li><a href="/dashboard">Dashboard</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Connect</h4>
                <ul>
                  <li><a href="/contact">Contact</a></li>
                  <li><a href="https://github.com/connordmcneely96" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                  <li><a href="https://linkedin.com/in/connordmcneely" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2025 Connor McNeely. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
