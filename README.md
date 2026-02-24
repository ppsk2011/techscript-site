# Techscript Limited — Website

Production-ready static website for **Techscript Limited** built with Vite + React + TypeScript, deployed to GitHub Pages with custom domain **techscript.ca**.

## File tree

```
techscript-site/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions — build & deploy to Pages
├── public/
│   ├── CNAME                   # Custom domain: techscript.ca
│   ├── favicon.svg
│   ├── og-image.svg            # Open Graph image
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── SEO.tsx
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   └── Privacy.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## Local development

```bash
npm install
npm run dev          # http://localhost:5173
```

## Build

```bash
npm run build        # outputs to dist/
npm run preview      # preview the production build locally
```

The build automatically copies `dist/index.html` → `dist/404.html` so that
React Router client-side routes work correctly on GitHub Pages.

---

## GitHub setup

### 1. Create the repository

```
On GitHub.com → New repository
Owner: ppsk2011
Name: techscript-site
Visibility: Public  (required for free GitHub Pages)
Do NOT initialise with README
```

### 2. Push the code

```bash
cd techscript-site
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/ppsk2011/techscript-site.git
git push -u origin main
```

### 3. Enable GitHub Pages via GitHub Actions

1. In the repository on GitHub, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. The `deploy.yml` workflow runs automatically on every push to `main`.

---

## Custom domain

### 4. Set custom domain in GitHub Pages

1. Go to **Settings → Pages**.
2. Under **Custom domain**, enter:
   ```
   techscript.ca
   ```
3. Click **Save**. GitHub will verify DNS (may take a few minutes once DNS propagates).
4. Once verified, tick **Enforce HTTPS**.

> The `public/CNAME` file already contains `techscript.ca` and is included in
> every build artifact, so the custom domain setting persists across deployments.

---

## GoDaddy DNS records

Log in to GoDaddy → **My Products → DNS** for `techscript.ca`.

> **Important:** Remove any existing A, AAAA, or CNAME records for the apex (`@`)
> and `www` before adding the ones below to avoid conflicts.

### Apex domain — four A records (@ → GitHub Pages IPs)

| Type | Name | Value            | TTL  |
|------|------|------------------|------|
| A    | @    | 185.199.108.153  | 600  |
| A    | @    | 185.199.109.153  | 600  |
| A    | @    | 185.199.110.153  | 600  |
| A    | @    | 185.199.111.153  | 600  |

### WWW subdomain — one CNAME record

| Type  | Name | Value              | TTL  |
|-------|------|--------------------|------|
| CNAME | www  | ppsk2011.github.io | 600  |

DNS changes typically propagate within **10–30 minutes**, but can take up to
48 hours in rare cases. You can check propagation with:

```bash
dig techscript.ca A
dig www.techscript.ca CNAME
```

---

## Google Search Console — Domain property verification

Use **Domain property** (not URL-prefix) so it covers both `http://`, `https://`,
`www`, and non-www automatically.

### Step-by-step

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Click **Add property** → choose **Domain** → enter:
   ```
   techscript.ca
   ```
   (no `https://`, no `www`)
3. Google shows a **TXT record** value, e.g.:
   ```
   google-site-verification=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   ```
4. In GoDaddy DNS, add this record:

   | Type | Name | Value                                            | TTL  |
   |------|------|--------------------------------------------------|------|
   | TXT  | @    | google-site-verification=XXXX...                 | 600  |

5. Click **Verify** in Search Console.
   - If verification fails immediately, wait 5–10 minutes for DNS to propagate
     and try again.
6. Once verified, Search Console shows the property as **Verified owner**.

---

## Google Play Console — Verify your organisation's website

Google Play organisation developer accounts require website verification through
Google Search Console.

### Step-by-step

1. Log in to [Google Play Console](https://play.google.com/console).
2. Go to **Setup → Developer account → Account details**.
3. Under **Website**, enter:
   ```
   https://techscript.ca
   ```
4. Click **Verify** (or **Request verification**).
5. Google Play checks that the currently logged-in Google account is a **verified
   owner** of `techscript.ca` in Google Search Console.
   - You must be logged in with the **same Google account** that owns the Search
     Console property.
6. If the ownership is confirmed, the website field shows as **Verified**.
   - If not, ensure you completed the Search Console domain verification above
     with the same Google account used for Play Console.
7. Save your account details.

---

## Summary checklist

- [x] Website live at `https://techscript.ca`
- [x] `https://www.techscript.ca` redirects to canonical `https://techscript.ca` (GitHub Pages handles this)
- [x] All four pages: Home, About, Privacy Policy, Contact
- [x] SEO: unique title/description per page, Open Graph tags, `robots.txt`, `sitemap.xml`
- [x] CNAME in build output
- [x] `404.html` fallback for SPA client-side routing
- [x] GitHub Actions auto-deploy on push to `main`
- [ ] GoDaddy DNS records configured
- [ ] GitHub Pages custom domain set + HTTPS enforced
- [ ] Google Search Console domain property verified via DNS TXT
- [ ] Google Play Console website verified
