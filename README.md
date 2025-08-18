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