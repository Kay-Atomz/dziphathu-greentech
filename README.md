# Dziphathu GreenTech

Website for Dziphathu GreenTech — built with React, TypeScript, and Tailwind CSS. Deployed to Firebase Hosting via GitHub Actions.

## Tech Stack

- **React 19** with TypeScript
- **Vite** (rolldown-vite) for bundling
- **Tailwind CSS v4** for styling
- **Framer Motion** for animations
- **React Router v7** for routing
- **Firebase Hosting** for deployment

## Getting Started

**Prerequisites:** Node.js 20+

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The site deploys automatically to Firebase Hosting when changes are merged into `main`.

Live URL: `https://dziphathu-greentech.web.app`

To deploy manually:
```bash
npm run build
firebase deploy
```

## Project Structure

```
src/
  assets/        # Images and static assets
  components/    # Reusable UI components
  pages/         # Page-level components
  App.tsx        # Root component and routes
  main.tsx       # Entry point
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for branching strategy, naming conventions, and workflow.
