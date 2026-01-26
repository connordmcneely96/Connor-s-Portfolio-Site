# Connor McNeely Portfolio

A modern portfolio website built with Next.js 15, showcasing mechanical engineering expertise and AI development work.

**Live Site:** [connor-s-portfolio-site.pages.dev](https://connor-s-portfolio-site.pages.dev)

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Cloudflare Pages
- **Language:** TypeScript

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio with dynamic routes
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── layout/           # Header, Footer
│   ├── projects/         # Project cards, filters
│   └── ui/               # Reusable UI components
├── data/                  # Project data
├── lib/                   # Utilities
└── public/               # Static assets
    └── resumes/          # Downloadable resumes
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Build for Cloudflare Pages
npm run build:cloudflare
```

## Deployment

The site deploys automatically to Cloudflare Pages on push to main branch.

### Manual Cloudflare Pages Deploy

```bash
# Build for static export
CF_PAGES=1 npm run build

# Output is in the 'out' directory
```

## Features

- **Responsive Design** - Mobile-first approach
- **Dark Theme** - Professional dark UI with accent colors
- **Animations** - Smooth scroll and hover animations
- **Static Export** - Optimized for edge deployment
- **SEO Optimized** - Meta tags and Open Graph support

## Resume Downloads

Two resume versions are available:
- Mechanical Engineering Resume
- AI/Developer Resume

Located in `/public/resumes/`

## License

MIT License - Connor McNeely
