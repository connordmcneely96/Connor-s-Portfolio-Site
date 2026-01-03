# GitHub Actions Setup Guide

Quick guide to set up automatic Cloudflare deployment via GitHub Actions.

## ⚡ Quick Setup (5 minutes)

### Step 1: Get Cloudflare API Token

1. Go to https://dash.cloudflare.com/profile/api-tokens
2. Click **Create Token**
3. Use **Edit Cloudflare Workers** template
4. **OR** create custom token with these permissions:
   - Account → Cloudflare Pages → Edit
   - Account → Cloudflare Workers Scripts → Edit
   - Account → Account Settings → Read
5. Click **Continue to summary** → **Create Token**
6. **COPY THE TOKEN** (you can't see it again!)

### Step 2: Add Token to GitHub

1. Go to your GitHub repository: https://github.com/connordmcneely96/Connor-s-Portfolio-Site
2. Click **Settings** (top menu)
3. Click **Secrets and variables** → **Actions** (left sidebar)
4. Click **New repository secret**
5. Name: `CLOUDFLARE_API_TOKEN`
6. Value: Paste your token from Step 1
7. Click **Add secret**

### Step 3: Enable GitHub Actions

1. Go to **Actions** tab in your repository
2. If Actions are disabled, click **I understand, enable them**
3. You should see the workflow: **Deploy to Cloudflare Production**

### Step 4: Test Deployment

**Option A: Push to main**
```bash
git add .
git commit -m "Test Cloudflare deployment"
git push origin main
```

**Option B: Manual trigger**
1. Go to **Actions** tab
2. Click **Deploy to Cloudflare Production**
3. Click **Run workflow**
4. Select `main` branch
5. Click **Run workflow**

### Step 5: Monitor Deployment

1. Click on the running workflow
2. Watch the deployment progress
3. Check for any errors
4. When complete, visit: https://leadership-legacy.pages.dev

---

## 🔍 Verify Setup

### Check Token Permissions
```bash
# Install wrangler locally
npm install -g wrangler

# Set token as environment variable
export CLOUDFLARE_API_TOKEN="your-token-here"

# Test authentication
wrangler whoami
```

### Test Build Locally
```bash
# Install dependencies
npm ci

# Build for Cloudflare
npm run build:cloudflare

# Verify output
ls -la out/
```

---

## 📊 Workflow Overview

The GitHub Actions workflow runs automatically on:
- ✅ Push to `main` branch
- ✅ Manual workflow dispatch

### Workflow Steps:

1. **Build Application**
   - Checkout code
   - Install dependencies
   - Lint code
   - Build Next.js for Cloudflare Pages
   - Upload build artifact

2. **Deploy Worker**
   - Deploy Cloudflare Worker
   - Output Worker URL

3. **Deploy Pages**
   - Download build artifact
   - Deploy to Cloudflare Pages
   - Output Pages URL

4. **Verify Deployment**
   - Test Pages is accessible
   - Test Worker endpoint
   - Check HTTP response codes

5. **Summary**
   - Create deployment summary
   - List all URLs
   - Provide next steps

---

## 🔧 Troubleshooting

### ❌ Error: "API token is invalid"

**Solution:**
1. Verify token is correctly copied in GitHub Secrets
2. Check token hasn't expired
3. Ensure token has required permissions
4. Try regenerating the token

### ❌ Error: "Project not found"

**Solution:**
1. Create Pages project first:
   ```bash
   wrangler pages project create leadership-legacy
   ```
2. Or create via Cloudflare Dashboard:
   - Go to Pages
   - Create project
   - Name: `leadership-legacy`

### ❌ Error: "Build failed"

**Solution:**
1. Check build logs in Actions tab
2. Test build locally:
   ```bash
   npm run build:cloudflare
   ```
3. Fix any TypeScript/lint errors
4. Push fix and try again

### ❌ Error: "Worker deployment failed"

**Solution:**
1. Verify `wrangler.toml` is configured
2. Check `worker.js` exists
3. Test locally:
   ```bash
   wrangler dev
   ```

---

## 🎯 Deployment Triggers

### Automatic Deployments

The workflow runs automatically when:
```yaml
on:
  push:
    branches:
      - main  # ← Deploys on push to main
```

### Manual Deployments

Trigger manually from GitHub UI:
1. Go to **Actions** tab
2. Select **Deploy to Cloudflare Production**
3. Click **Run workflow**
4. Choose branch (usually `main`)
5. Click green **Run workflow** button

### Disable Auto-Deploy

To disable automatic deployments, edit `.github/workflows/cloudflare-production.yml`:

```yaml
on:
  # Remove or comment out:
  # push:
  #   branches:
  #     - main

  # Keep manual trigger only:
  workflow_dispatch:
```

---

## 📝 Environment Variables

### Pages Environment Variables

Set in Cloudflare Dashboard:
1. Go to **Pages** → **leadership-legacy** → **Settings** → **Environment variables**
2. Add variables:
   - `NEXT_PUBLIC_SITE_URL`: `https://leadership-legacy.pages.dev`
   - `NODE_VERSION`: `18`

### Worker Secrets

Set via CLI:
```bash
wrangler secret put API_KEY
# Enter secret when prompted
```

Or via GitHub Actions:
```yaml
env:
  MY_SECRET: ${{ secrets.MY_SECRET }}
```

---

## 🔄 Multiple Environments

### Setup Staging Environment

1. **Create staging workflow:**
   ```yaml
   # .github/workflows/cloudflare-staging.yml
   name: Deploy to Staging

   on:
     push:
       branches:
         - develop

   # ... rest similar to production
   ```

2. **Update deployment commands:**
   ```yaml
   - name: Deploy to Staging
     run: |
       wrangler pages deploy out \
         --project-name=leadership-legacy \
         --branch=staging
   ```

3. **Access URLs:**
   - Production: `https://leadership-legacy.pages.dev`
   - Staging: `https://staging.leadership-legacy.pages.dev`

---

## 📈 Monitoring Deployments

### View Deployment History

**GitHub:**
- Go to **Actions** tab
- See all workflow runs
- Click any run for detailed logs

**Cloudflare:**
- Dashboard → Pages → leadership-legacy
- View all deployments
- See build logs
- Check analytics

### Set Up Notifications

**GitHub:**
1. Watch repository
2. Get notified on workflow failures

**Slack Integration:**
Add to workflow:
```yaml
- name: Notify Slack
  if: failure()
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
```

---

## 🚀 Advanced Configuration

### Deploy to Custom Domain

1. Add custom domain in Cloudflare Pages
2. Update workflow environment variables:
   ```yaml
   env:
     NEXT_PUBLIC_SITE_URL: https://connormcneely.com
   ```

### Add Build Cache

Speed up builds with caching:
```yaml
- name: Cache Next.js build
  uses: actions/cache@v4
  with:
    path: |
      .next/cache
    key: ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json') }}
```

### Deploy on Pull Requests

Add preview deployments:
```yaml
on:
  pull_request:
    branches:
      - main
```

---

## ✅ Deployment Checklist

Before first deployment:
- [ ] Cloudflare account created
- [ ] API token generated with correct permissions
- [ ] Token added to GitHub Secrets as `CLOUDFLARE_API_TOKEN`
- [ ] Pages project created (`leadership-legacy`)
- [ ] Worker configured in `wrangler.toml`
- [ ] GitHub Actions enabled
- [ ] Workflow file exists (`.github/workflows/cloudflare-production.yml`)
- [ ] Code pushed to `main` branch

After deployment:
- [ ] Workflow completed successfully
- [ ] Site accessible at https://leadership-legacy.pages.dev
- [ ] All pages load correctly
- [ ] No console errors
- [ ] Forms and interactions work
- [ ] Custom domain configured (optional)

---

## 📚 Additional Resources

### Documentation
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Wrangler CLI Docs](https://developers.cloudflare.com/workers/wrangler/)

### Helpful Commands
```bash
# View workflow runs
gh run list

# View specific run
gh run view <run-id>

# Re-run failed workflow
gh run rerun <run-id>

# List secrets
gh secret list

# Add secret via CLI
gh secret set CLOUDFLARE_API_TOKEN
```

---

**Need Help?**
- Check [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for full documentation
- Review workflow logs in GitHub Actions tab
- Check Cloudflare Dashboard for deployment status
- Review [Troubleshooting](#troubleshooting) section above

**Last Updated:** 2025-12-31
