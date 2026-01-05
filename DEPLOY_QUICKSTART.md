# 🚀 Cloudflare Deployment - Quick Start

**Get your portfolio live in 5 minutes!**

---

## Option 1: Automatic Deployment (Recommended)

### Setup Once:

1. **Get Cloudflare API Token:**
   - Go to: https://dash.cloudflare.com/profile/api-tokens
   - Create Token → Use "Edit Cloudflare Workers" template
   - Copy the token

2. **Add to GitHub:**
   - Go to: https://github.com/connordmcneely96/Connor-s-Portfolio-Site/settings/secrets/actions
   - New secret → Name: `CLOUDFLARE_API_TOKEN`
   - Paste token → Add secret

3. **Deploy:**
   ```bash
   git push origin main
   ```

**That's it!** Check deployment at: https://github.com/connordmcneely96/Connor-s-Portfolio-Site/actions

---

## Option 2: Manual Deployment

### One-time Setup:
```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Create Pages project
wrangler pages project create leadership-legacy
```

### Deploy:
```bash
# Deploy everything
npm run deploy:worker
npm run deploy:pages
```

---

## Your Live URLs

After deployment:
- **Website:** https://leadership-legacy.pages.dev
- **Worker:** https://leadership-legacy-worker.ede6590ac0d2fb7daf155b35653457b2.workers.dev

---

## Quick Commands

```bash
# Deploy to Cloudflare Pages
npm run deploy:pages

# Deploy Worker
npm run deploy:worker

# View logs
wrangler tail

# List deployments
wrangler pages deployment list --project-name=leadership-legacy
```

---

## Troubleshooting

**Build fails?**
```bash
npm run build:cloudflare
# Fix any errors, then deploy
```

**Authentication fails?**
```bash
wrangler logout
wrangler login
```

**Need help?**
- Full docs: [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
- GitHub Actions: [GITHUB_ACTIONS_SETUP.md](./GITHUB_ACTIONS_SETUP.md)

---

## Files Reference

- **Workflow:** `.github/workflows/cloudflare-production.yml`
- **Config:** `wrangler.toml`
- **Worker:** `worker.js`
- **Build:** `next.config.js`

---

**Next Steps:**
1. Test your deployment
2. Add custom domain (optional)
3. Set up monitoring
4. Add resume PDFs to `/public/resumes/`

**You're live! 🎉**
