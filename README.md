# My Portfolio

A personal portfolio website built with Next.js to showcase my profile, skills, experience, and selected projects.

## Overview

This project is a modern personal website for Bileam Mangalla, a Frontend Web Developer based in Indonesia. It is designed to present an introduction, professional background, and portfolio highlights in a clean and responsive layout.

The site uses the App Router architecture in Next.js and organizes content in reusable components and data files for easy maintenance.

## Features

- Responsive landing page with hero section
- About section with personal information and background
- Portfolio-ready structure for skills, projects, and experience
- Clean and modern UI
- Easy-to-update content via data files
- API routes for portfolio data handling

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Lucide React
- Axios

## Project Structure

```bash
my-portofolio/
├── app/
│   ├── api/
│   │   ├── experience/
│   │   ├── profile/
│   │   ├── projects/
│   │   └── skills/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Hero.tsx
│   └── navbar.tsx
├── data/
│   ├── contact.ts
│   ├── experience.ts
│   ├── profile.ts
│   ├── projects.ts
│   └── skills.ts
├── public/
├── types/
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and visit:

```bash
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Customize Content

You can update your personal portfolio details in the data files inside the `data/` folder, especially:

- `data/profile.ts`
- `data/projects.ts`
- `data/experience.ts`
- `data/skills.ts`
- `data/contact.ts`

This makes it simple to change your name, bio, projects, social links, and work history without modifying the main component structure.

## Deployment

This project is ready to be deployed on platforms such as:

- Vercel
- Netlify
- Other Node.js-compatible hosting providers

For Vercel, the recommended approach is to connect the repository and deploy directly with the default Next.js settings.

## License

This project is for personal portfolio use and is not currently configured with a formal license.

## Contact

If you want to get in touch, you can update the contact information in the `data/contact.ts` file and connect it to the UI accordingly.
