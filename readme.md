# pw-portfolio

Modern personal portfolio website, built as a single-page React application with routing, animations, project showcases, and contact details.

## Table of contents
- [Tech stack](#tech-stack)
- [Features](#features)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Environment variables](#environment-variables)
- [License](#license)
- [Contact](#contact)

## Tech stack
- Frontend: React 18 + TypeScript
- Build tool: Vite 4
- Routing: React Router v6
- Styling: styled-components
- Animation: Framer Motion + React Lenis
- Tooling: ESLint, Prettier, Husky, lint-staged, Commitlint

## Features
- Home, Work, About, Contact, and dynamic Project detail routes
- Project showcase powered by structured project data
- Cookie consent flow integrated with Google Analytics (GA4)
- SEO metadata support and sitemap/robots setup
- Smooth scrolling and custom cursor interactions
- Responsive layout optimized for desktop and mobile

## Getting started
### Prerequisites
- Node.js `>=24.0.0`
- Yarn `>=1.22.19`

### Installation
```bash
git clone https://github.com/wrobit/pw-portfolio.git
cd pw-portfolio
yarn
```

### Run locally
```bash
yarn dev
```

Application runs on `http://localhost:8080`.

## Available scripts
- `yarn dev` - starts the Vite dev server on port 8080
- `yarn build` - runs TypeScript checks and builds production assets
- `yarn preview` - serves the production build locally
- `yarn lint` - runs ESLint on `src`
- `yarn type:check` - runs TypeScript type checks without emitting files
- `yarn prettier` - formats project files with Prettier

## Environment variables
Create a `.env` file in the project root if needed:

```env
VITE_GOOGLE_ANALYTICS_ID=your_ga4_measurement_id
VITE_BASE_URL=/
```

## License
Copyright (c) wrobit | Piotr Wrobel. All rights reserved.

## Contact
Contact me via e-mail: piotrwrobel.ajiiz@gmail.com

Initialized with 🖤