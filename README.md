# Huddle Steel Buildings Website

Marketing website for Huddle Steel Buildings (Canton, TX) — custom metal buildings, barndominiums, agricultural structures, and metal roofing in East Texas.

## Tech Stack

- **Astro 5** — Static site generation
- **Tailwind CSS v4** — Utility-first styling
- **Content Collections** — Blog posts + service area pages in Markdown
- **@astrojs/sitemap** — Auto-generated sitemap
- **@astrojs/rss** — RSS feed for the blog

## Getting Started

```bash
npm install
npm run dev      # Start dev server at localhost:4321
npm run build    # Build for production
npm run preview  # Preview the production build
```

## Project Structure

```
src/
├── components/     # Reusable Astro components (Navbar, Footer, CTABanner, etc.)
├── content/
│   ├── blog/       # Markdown blog posts
│   └── service-areas/ # Markdown service area pages (26 cities)
├── data/           # Static data (service area definitions)
├── layouts/        # Page layouts (Layout, BlogPost)
├── pages/          # File-based routing
│   ├── services/   # 5 individual service pages
│   ├── service-areas/ # Dynamic [slug] route for 26 cities
│   └── blog/       # Blog index + [slug] route
└── styles/         # Global CSS + Tailwind theme
```

## Pages (44 total)

- **Home** — Hero, services, trust section, gallery preview, testimonials
- **Services** (6) — Agricultural, Commercial, Residential/Barndominiums, Metal Roofing, Churches
- **Service Areas** (27) — Index + 26 individual city pages for local SEO
- **Blog** (6) — Index + 5 seed posts
- **Gallery** — Filterable project grid with placeholder images
- **About** — Company story, values, DIY vs turn-key
- **Contact** — Map, contact info, business hours, form
- **Quote** — Detailed quote request form

## Deployment

Deploy to Vercel as a static site. No server-side rendering needed.
