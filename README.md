# Bandage — E-Commerce Landing Page

Frontend Standardisation Test submission. A fully responsive, mobile-first
implementation of the "Bandage" e-commerce landing page design, built with
React, TypeScript, Redux Toolkit, and RTK Query.

## Project Overview

This project implements **only the landing page** (per the "Build Only The
Landing Page For This Test" instruction in the brief), covering:

- Top bar (contact info + social links)
- Header with responsive navigation, search, wishlist, and cart (state
  managed via Redux Toolkit)
- Hero category grid
- **Bestseller Products** — live data fetched from the
  [DummyJSON Products API](https://dummyjson.com/docs/products) via RTK
  Query, with loading skeletons, error handling with retry, and "Load More"
  pagination
- Services / features strip
- Featured blog posts
- Testimonial + Instagram grid
- Call-to-action banner
- Footer with newsletter subscribe form and link columns

## Tech Stack

- React 18 + Vite + TypeScript
- Vanilla CSS (CSS custom properties for design tokens, no CSS framework)
- Redux Toolkit — global UI state (cart count, wishlist count, mobile menu)
- RTK Query — Bestseller Products data fetching, caching, and pagination

## Installation

```bash
npm install
```

## Running Locally

```bash
npm run dev
```

The app runs at `http://localhost:5173` by default.

## Build & Deployment

```bash
npm run build    # type-checks and builds to /dist
npm run preview  # preview the production build locally
```

Deployed to Netlify:

- **Live URL:** _add your Netlify URL here after deploying_
- Build command: `npm run build`
- Publish directory: `dist`

## Project Structure

```
src/
  app/                Redux store setup + typed hooks
  features/
    products/          RTK Query API slice (DummyJSON products)
    ui/                 UI slice (cart, wishlist, mobile menu state)
  components/           One component + one CSS file per section
  styles/                Global CSS design tokens
App.tsx                  Composes all landing page sections
main.tsx                 Entry point, wraps app in Redux <Provider>
```

## Assumptions & Implementation Notes

- The brief's "Question" section describes a shopping cart page, but the
  "Important Note" section explicitly says to **build only the landing
  page**. This implementation follows the landing page instruction.
- The Figma reference uses placeholder category labels ("Graphic Design /
  English Department") that don't correspond to real DummyJSON fields. The
  Bestseller Products section instead derives a readable category + brand
  line from the actual API response, so the data shown is real rather than
  hardcoded text laid over live product data.
- Product images, category card images, blog post images, and the
  Instagram grid use royalty-free Unsplash images since the brief didn't
  supply original brand assets for those slots.
- The newsletter subscribe form has no backend endpoint specified in the
  brief, so submission is handled client-side with a local confirmation
  message rather than a fabricated API call.
- Cart/wishlist counts are wired to Redux Toolkit and are clickable
  (increment on "add to cart", toggle on wishlist heart) to demonstrate
  real state management, since the landing page alone has no cart page to
  interact with otherwise.
