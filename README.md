# Grand Oak Hotel & Restaurant Website

A modern, responsive single-page marketing website for a luxury hotel + restaurant brand.

Built with Vite + React + TypeScript and styled with Tailwind CSS (shadcn/ui components).

## What’s Inside

The homepage is composed of section components rendered on the `/` route:

- **Hero**: full-screen intro + simple booking widget (UI-only)
- **About**: brand story + stats
- **Rooms**: room cards with pricing + “Book” toast (UI-only)
- **Dining**: menu tabs + reservation form (UI-only)
- **Amenities**: highlighted amenities + hours
- **Gallery**: category filter + lightbox
- **Testimonials**: carousel
- **Contact**: contact form (UI-only) + Google Maps embed

## Tech Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** + `tailwindcss-animate`
- **shadcn/ui** (Radix UI primitives)
- **framer-motion** (animations)
- **react-router-dom** (routing)
- **react-helmet-async** (SEO meta tags)
- **@tanstack/react-query** (installed and wired in, ready for API integration)
- **sonner** + shadcn toaster (toast notifications)

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm (this repo includes a `package-lock.json`)

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Vite is configured to run on:

- `http://localhost:8080`

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

- `index.html` — base HTML + social meta tags (Open Graph / Twitter)
- `src/main.tsx` — React entry
- `src/App.tsx` — providers + router
- `src/pages/Index.tsx` — homepage composition (sections) + SEO via Helmet
- `src/pages/NotFound.tsx` — catch-all route
- `src/components/layout/` — header/footer
- `src/components/sections/` — page sections (Hero, About, Rooms, Dining, Amenities, Gallery, Testimonials, Contact)
- `src/components/ui/` — shadcn/ui components
- `src/assets/` — images used throughout the site

## Common Customizations

### Update business info

- Header phone/email: `src/components/layout/Header.tsx`
- Contact address/phone/email + map embed: `src/components/sections/Contact.tsx`
- Footer social links: `src/components/layout/Footer.tsx`

### Update SEO / social sharing

- Base tags: `index.html`
- Page title/description/keywords: `src/pages/Index.tsx` (Helmet)

### Swap images

Replace images in `src/assets/` (or update imports in the relevant section components).

## Notes

- Forms (booking, reservations, contact) currently show toast confirmations only and do not submit to a backend.


## License

Add your license here (or remove this section if not needed).
