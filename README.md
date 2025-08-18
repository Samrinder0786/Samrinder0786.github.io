<<<<<<< HEAD
# CodeHive – Developer Collaboration Platform

## Overview
Phase 2 adds routing, modular components, theming, and global state while keeping Phase 1 pages intact.

## Tech
- Next.js (App Router), React
- Context API (theme, snippets, forum data)
- CSS Modules + utility classes

## Routes
- `/home` – landing
- `/forum` – list of discussions
- `/forum/[id]` – discussion details (dynamic)
- `/snippets` – submit + list
- `/snippets/[id]` – snippet details (dynamic)
- `/profile/[username]` – profile placeholder (dynamic)
- Custom 404 at unknown routes

## Components
- `NavBar` (active links, theme toggle)
- `Footer`
- Forum (compound): `ForumPostList` → `ForumPostCard`, `ForumStats`, `ForumTag`
- Snippets: `CodeSnippetForm` (adds to global state), `SnippetList`
- UI primitives: `Button`, `Card`, `Tag`

## State Management
`context/AppContext.jsx` holds:
- `theme` + `toggleTheme` (persisted)
- `snippets`, `addSnippet`
- `discussions`

## API Prep (Phase 3)
`services/githubApi.js`, `services/stackExchangeApi.js` – mocked async functions for later integration.
=======
<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
# Samrinder0786.github.io
>>>>>>> 9673ae4964531d5d77e9b5cf13b5b317a26e873e
>>>>>>> c7f48afe7af64966b24a12ecf580105f61b8f7b9
