import type { Metadata } from 'next'
import Navigation from './components/Navigation'
import './globals.css'

export const metadata: Metadata = {
  title: 'Connor Mcneely - Leadership & Legacy',
  description: 'Empowering leaders to build lasting legacies through coaching, mentorship, and community',
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
                <h4>Connor Mcneely</h4>
                <p>Leadership & Legacy</p>
              </div>
              <div className="footer-column">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="/about">About</a></li>
                  <li><a href="/coaching">Coaching</a></li>
                  <li><a href="/community">Community</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Connect</h4>
                <ul>
                  <li><a href="/contact">Contact</a></li>
                  <li><a href="/portfolio">Portfolio</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2025 Connor Mcneely. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
