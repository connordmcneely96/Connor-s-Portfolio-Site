# Connor Mcneely - Leadership & Legacy Platform

A professional 6-page website for Connor Mcneely's coaching, mentorship, and leadership development platform.

## Features

- **6 Comprehensive Pages**: Home, About, Coaching, Portfolio, Community, and Contact
- **Dual Theme Design**: Alternating light and dark themes across pages for visual interest
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations and transitions
- **Interactive Elements**: Mobile navigation, form validation, and smooth scrolling

## Pages Overview

1. **Home (Light Theme)**: Landing page with hero section, key features, and call-to-action
2. **About (Dark Theme)**: Connor's story, philosophy, approach, and credentials
3. **Coaching (Light Theme)**: Service offerings, coaching process, and client testimonials
4. **Portfolio (Dark Theme)**: Featured projects, success stories, and impact metrics
5. **Community (Light Theme)**: Community benefits, membership tiers, and values
6. **Contact (Dark Theme)**: Contact form, FAQ section, and contact information

## Technology Stack

- **HTML5**: Semantic markup for all pages
- **CSS3**: Custom styling with CSS variables for theming
- **JavaScript**: Interactive features and form handling
- **No Dependencies**: Pure vanilla implementation for fast loading

## Getting Started

### Viewing Locally

1. Clone the repository
2. Open `index.html` in your web browser, or
3. Run a local server:
   ```bash
   python3 -m http.server 8000
   ```
   Then visit `http://localhost:8000`

## File Structure

```
├── index.html          # Home page (Light theme)
├── about.html          # About page (Dark theme)
├── coaching.html       # Coaching services (Light theme)
├── portfolio.html      # Portfolio showcase (Dark theme)
├── community.html      # Community platform (Light theme)
├── contact.html        # Contact page (Dark theme)
├── styles.css          # Main stylesheet with dual themes
├── script.js           # Interactive functionality
└── README.md           # This file
```

## Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --light-bg: #ffffff;
    --light-text: #2c3e50;
    --dark-bg: #1a1a2e;
    --dark-text: #eaeaea;
    --primary-color: #3498db;
}
```

### Adding Content

Each HTML file is well-structured and commented for easy content updates.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - See LICENSE file for details

---

Built with ❤️ for leadership development and community building
