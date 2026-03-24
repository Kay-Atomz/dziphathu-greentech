# Contributing Guide

## Branching Strategy

This project follows **GitHub Flow** — a lightweight strategy where `main` is always production-ready and all work is done on short-lived branches merged via pull requests.

```
main              ← production, auto-deploys to Firebase on merge
  └── feature/...
  └── fix/...
  └── chore/...
  └── hotfix/...
```

## Branch Naming

```
<type>/<short-kebab-description>
```

| Type | Use for |
|---|---|
| `feature/` | New pages, sections, or components |
| `fix/` | Bug fixes |
| `chore/` | Dependencies, config, tooling, non-functional changes |
| `hotfix/` | Urgent production fixes |

**Examples:**
```
feature/contact-form
feature/services-section
fix/mobile-nav-overlap
fix/email-subscription-error
chore/update-dependencies
hotfix/broken-hero-image
```

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>: <short description>
```

**Examples:**
```
feat: add contact form with MailerLite integration
fix: correct mobile nav z-index overlap
chore: upgrade react-router-dom to v7
hotfix: restore broken hero background image
```

## Workflow

```bash
# 1. Start from an up-to-date main
git checkout main
git pull

# 2. Create a branch
git checkout -b feature/your-feature-name

# 3. Make changes and commit
git add .
git commit -m "feat: describe what you did"

# 4. Push and open a pull request
git push -u origin feature/your-feature-name
```

Open a PR on GitHub, wait for the build check to pass, then merge. Delete the branch after merging.

## Branch Protection Rules (main)

The `main` branch is protected:

- Direct pushes are not allowed — all changes must go through a PR
- The build must pass before merging
- Branches must be up to date with `main` before merging

## Deployment

Merging into `main` automatically triggers a Firebase Hosting deployment via GitHub Actions. No manual deploy steps are needed.
