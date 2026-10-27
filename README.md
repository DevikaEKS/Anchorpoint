# Anchor Point — Mobility, Hospitality & Events

A responsive website for **Anchor Point Hospitality Private Limited** (Chennai) featuring executive cab services, boutique hospitality suites, turnkey event management, and an interactive vehicle fleet & taxi showroom.

---

## Deploying to GitHub Pages

This project is pre-configured for GitHub Pages deployment.

### Option 1: Automatic GitHub Actions Deployment (Recommended)

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Anchor Point website with fleet showroom"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. On your GitHub repository page:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. That's it! The workflow in `.github/workflows/deploy.yml` will automatically build the application and publish it to `https://<your-username>.github.io/<your-repo-name>/`.

---

### Option 2: Manual / Build Folder Deployment

If you prefer to deploy directly from the `dist/` folder or a `gh-pages` branch:

1. Build the production bundle:
   ```bash
   npm run build
   ```
2. The compiled static website will be created in the `dist/` directory. All asset paths are configured with relative links (`./`), so you can upload the contents of `dist/` directly to any static web host, GitHub Pages branch (`gh-pages`), Netlify, or Vercel.

---

## Local Development

```bash
# Install dependencies
npm install

# Start Vite dev server
npm run dev

# Build for production
npm run build
```
