# GitHub Pages Deployment Guide

This project is configured for automatic deployment to GitHub Pages.

## Setup Instructions

### 1. Create GitHub Repository
1. Go to https://github.com/new
2. Create a new repository (e.g., "micropigmentarebuze")
3. **Don't** initialize with README (you already have files)

### 2. Configure Astro for GitHub Pages

Edit `astro.config.mjs` and uncomment these lines:
```javascript
site: 'https://yourusername.github.io',
base: '/your-repo-name',
```

Replace:
- `yourusername` with your GitHub username
- `your-repo-name` with your repository name

**Example:**
If your repo is `https://github.com/paulalupu/micropigmentarebuze`, use:
```javascript
site: 'https://paulalupu.github.io',
base: '/micropigmentarebuze',
```

### 3. Enable GitHub Pages

1. Push your code to GitHub:
```bash
git remote add origin https://github.com/yourusername/your-repo-name.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

2. Go to your repository on GitHub
3. Click **Settings** → **Pages**
4. Under **Source**, select: **GitHub Actions**
5. Save

### 4. Automatic Deployment

Every time you push to the `main` branch:
- GitHub Actions will automatically build your site
- Deploy it to GitHub Pages
- Your site will be live at: `https://yourusername.github.io/your-repo-name`

## Manual Deployment

You can also trigger deployment manually:
1. Go to **Actions** tab in your GitHub repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

## Workflow File

The deployment workflow is located at: `.github/workflows/deploy.yml`

It will:
- ✅ Build your Astro site
- ✅ Upload to GitHub Pages
- ✅ Deploy automatically
- ✅ Use Node 20 and npm

## Troubleshooting

If deployment fails:
1. Check the **Actions** tab for error messages
2. Ensure GitHub Pages is enabled in Settings
3. Verify your `astro.config.mjs` has correct `site` and `base` values
4. Make sure the workflow has proper permissions (already configured)

## Local Development

Development server runs on port 6200:
```bash
npm run dev
```

Access at: http://localhost:6200
