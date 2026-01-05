# Cloudflare Deployment Guide

Complete guide for deploying Connor McNeely's portfolio to Cloudflare Pages and Workers.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [GitHub Secrets Setup](#github-secrets-setup)
3. [Cloudflare Configuration](#cloudflare-configuration)
4. [Deployment Methods](#deployment-methods)
5. [Troubleshooting](#troubleshooting)
6. [Monitoring](#monitoring)

---

## Prerequisites

### Required Accounts
- ✅ GitHub account with repository access
- ✅ Cloudflare account (Free tier works)
- ✅ Node.js 18+ installed locally (for manual deployments)

### Required Packages
```bash
npm install -g wrangler
```

---

## GitHub Secrets Setup

### Step 1: Get Cloudflare API Token

1. Log into [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Go to **My Profile** → **API Tokens**
3. Click **Create Token**
4. Use the **Edit Cloudflare Workers** template or create custom token with:
   - **Account** → **Cloudflare Pages** → **Edit**
   - **Account** → **Cloudflare Workers Scripts** → **Edit**
   - **Account** → **Account Settings** → **Read**
5. Copy the generated token

### Step 2: Add Secret to GitHub

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `CLOUDFLARE_API_TOKEN`
5. Value: Paste the token from Step 1
6. Click **Add secret**

### Required GitHub Secrets

| Secret Name | Description | Where to Get It |
|------------|-------------|-----------------|
| `CLOUDFLARE_API_TOKEN` | API token for Cloudflare | Cloudflare Dashboard → API Tokens |

### Optional GitHub Secrets

| Secret Name | Description | Example |
|------------|-------------|---------|
| `CLOUDFLARE_ACCOUNT_ID` | Override account ID | `ede6590ac0d2fb7daf155b35653457b2` |

---

## Cloudflare Configuration

### 1. Create Cloudflare Pages Project (First Time Only)

**Option A: Via Wrangler CLI**
```bash
# Login to Cloudflare
wrangler login

# Create Pages project
wrangler pages project create leadership-legacy
```

**Option B: Via Cloudflare Dashboard**
1. Go to **Pages** in Cloudflare Dashboard
2. Click **Create a project**
3. Choose **Direct Upload**
4. Name: `leadership-legacy`
5. Click **Create project**

### 2. Deploy Worker (First Time Only)

```bash
# Deploy worker
wrangler deploy

# Verify deployment
wrangler tail
```

### 3. Configure Environment Variables (Optional)

**For Pages:**
```bash
# Set production environment variables
wrangler pages secret put NEXT_PUBLIC_API_URL
# Enter: https://leadership-legacy-worker.ede6590ac0d2fb7daf155b35653457b2.workers.dev
```

**For Worker:**
```bash
# Set worker secrets
wrangler secret put API_KEY
# Enter your secret value
```

---

## Deployment Methods

### Method 1: Automatic GitHub Actions (Recommended)

**Triggers:**
- Push to `main` branch
- Manual workflow dispatch

**Workflow File:** `.github/workflows/cloudflare-production.yml`

**Steps:**
1. Push code to `main` branch:
   ```bash
   git add .
   git commit -m "Deploy to production"
   git push origin main
   ```

2. Monitor deployment:
   - Go to **Actions** tab in GitHub
   - Click on the running workflow
   - View logs and deployment status

**Manual Trigger:**
1. Go to **Actions** tab
2. Select **Deploy to Cloudflare Production**
3. Click **Run workflow**
4. Choose environment and confirm

### Method 2: Manual Deployment via CLI

**Full deployment:**
```bash
chmod +x deploy-worker.sh deploy-pages.sh
./deploy-worker.sh
./deploy-pages.sh
```

**Deploy only Pages:**
```bash
./deploy-pages.sh
```

**Deploy only Worker:**
```bash
./deploy-worker.sh
```

### Method 3: Using NPM Scripts

```bash
# Deploy worker
npm run deploy:worker

# Deploy pages
npm run deploy:pages
```

---

## Understanding the Deployment Pipeline

### Build Process

1. **Install Dependencies**
   ```bash
   npm ci
   ```

2. **Build static site for Cloudflare Pages**
   ```bash
   npm run build:pages
   ```
   - Copies `apps/leadership-legacy/` into `/out` directory

3. **Deploy Worker**
   - Uses `worker.js` as entry point
   - Configured via `wrangler.toml`
   - Handles API routes and dynamic functionality

4. **Deploy Pages**
   - Uploads `/out` directory to Cloudflare Pages
   - Serves static assets globally via CDN
   - Integrates with Worker for dynamic routes

### Deployment Architecture

```
┌─────────────────────────────────────────────┐
│           GitHub Actions Workflow            │
│                                              │
│  1. Build Next.js App                        │
│  2. Deploy Worker (API/Backend)              │
│  3. Deploy Pages (Frontend/Static)           │
│  4. Verify Deployments                       │
└─────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│            Cloudflare Edge Network           │
│                                              │
│  ┌──────────────┐    ┌──────────────┐      │
│  │   Worker     │    │    Pages     │      │
│  │  (API/SSR)   │◄──►│  (Static)    │      │
│  └──────────────┘    └──────────────┘      │
│         │                    │              │
│         ▼                    ▼              │
│    D1 Database          R2 Storage          │
│    KV Namespace                             │
└─────────────────────────────────────────────┘
```

---

## Monitoring & Verification

### 1. Check Deployment Status

**GitHub Actions:**
- View real-time logs in Actions tab
- Check deployment summary
- Review test results

**Cloudflare Dashboard:**
- **Pages**: https://dash.cloudflare.com → Pages → leadership-legacy
- **Workers**: https://dash.cloudflare.com → Workers & Pages → leadership-legacy-worker

### 2. Live URLs

After deployment, your site will be available at:

- **Production Site**: https://leadership-legacy.pages.dev
- **Worker API**: https://leadership-legacy-worker.ede6590ac0d2fb7daf155b35653457b2.workers.dev
- **Custom Domain** (if configured): https://connormcneely.com

### 3. View Logs

**Worker Logs:**
```bash
# Real-time logs
wrangler tail

# With filters
wrangler tail --status error
```

**Pages Logs:**
```bash
# View deployment logs
wrangler pages deployment list --project-name=leadership-legacy

# Tail specific deployment
wrangler pages deployment tail --project-name=leadership-legacy
```

### 4. Analytics

View analytics in Cloudflare Dashboard:
- **Pages Analytics**: Dashboard → Pages → leadership-legacy → Analytics
- **Worker Analytics**: Dashboard → Workers & Pages → leadership-legacy-worker → Metrics

---

## Troubleshooting

### Common Issues

#### Issue: "API Token is invalid"
**Solution:**
1. Verify token in GitHub Secrets
2. Ensure token has correct permissions
3. Regenerate token if needed

#### Issue: "Build fails with memory error"
**Solution:**
```bash
# Increase Node memory limit
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

#### Issue: "Pages deployment: 'out' directory not found"
**Solution:**
```bash
# Ensure build completes successfully
npm run build:cloudflare

# Verify out directory exists
ls -la out/
```

#### Issue: "Worker deployment fails"
**Solution:**
1. Check `wrangler.toml` configuration
2. Verify `worker.js` exists
3. Test locally:
   ```bash
   wrangler dev
   ```

#### Issue: "404 on deployed site"
**Solution:**
1. Check Next.js export configuration in `next.config.js`
2. Verify `output: 'export'` is set
3. Ensure all routes are static or handled by Worker

### Debug Locally

**Test Worker locally:**
```bash
wrangler dev
```

**Test Pages build:**
```bash
CF_PAGES=1 npm run build
npx serve out
```

**Test full stack:**
```bash
# Terminal 1: Start Worker
wrangler dev

# Terminal 2: Start Pages
npx serve out
```

---

## Advanced Configuration

### Custom Domain Setup

1. **Add domain in Cloudflare Pages:**
   - Go to Pages project → Custom domains
   - Click Add custom domain
   - Enter domain: `connormcneely.com`
   - Follow DNS configuration steps

2. **Update `wrangler.toml` for Worker:**
   ```toml
   route = {
     pattern = "api.connormcneely.com/*",
     zone_id = "YOUR_ZONE_ID"
   }
   ```

3. **Deploy with custom domain:**
   ```bash
   wrangler deploy
   ```

### Environment-Specific Deployments

**Staging:**
```bash
# Deploy to staging
wrangler pages deploy out --project-name=leadership-legacy --branch=staging

# Deploy staging worker
wrangler deploy --env staging
```

**Production:**
```bash
# Deploy to production
wrangler pages deploy out --project-name=leadership-legacy --branch=main
```

### Database & Storage

**D1 Database:**
```bash
# Create database
wrangler d1 create leadership-legacy-db

# Run migrations
wrangler d1 execute leadership-legacy-db --file=cloudflare-schema.sql

# Query database
wrangler d1 execute leadership-legacy-db --command="SELECT * FROM users"
```

**R2 Storage:**
```bash
# Create bucket
wrangler r2 bucket create leadership-legacy-assets

# List buckets
wrangler r2 bucket list
```

**KV Namespace:**
```bash
# Create namespace
wrangler kv:namespace create LEADERSHIP_CONFIG

# Set key
wrangler kv:key put --namespace-id=YOUR_ID "key" "value"

# Get key
wrangler kv:key get --namespace-id=YOUR_ID "key"
```

---

## Useful Commands Reference

### Deployment
```bash
# Deploy worker only
npm run deploy:worker

# Deploy pages only
npm run deploy:pages
```

### Monitoring
```bash
# Worker logs
wrangler tail

# Pages deployments
wrangler pages deployment list --project-name=leadership-legacy

# Analytics
wrangler pages deployment list --project-name=leadership-legacy
```

### Management
```bash
# List all workers
wrangler list

# List all pages projects
wrangler pages project list

# Delete deployment
wrangler pages deployment list --project-name=leadership-legacy
```

### Local Development
```bash
# Start worker locally
wrangler dev

# Start pages locally
npm run dev

# Test production build
npm run build:cloudflare && npx serve out
```

---

## Security Best Practices

1. **Never commit secrets** to repository
2. **Use GitHub Secrets** for all sensitive data
3. **Rotate API tokens** regularly
4. **Enable 2FA** on Cloudflare account
5. **Review deployment logs** for suspicious activity
6. **Set up alerts** in Cloudflare Dashboard

---

## Support & Resources

### Documentation
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Wrangler CLI Docs](https://developers.cloudflare.com/workers/wrangler/)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

### Community
- [Cloudflare Community](https://community.cloudflare.com/)
- [Cloudflare Discord](https://discord.gg/cloudflaredev)

### Cloudflare Support
- Dashboard: https://dash.cloudflare.com
- Status: https://www.cloudflarestatus.com/

---

## Quick Start Checklist

- [ ] Cloudflare account created
- [ ] API token generated
- [ ] GitHub secret added (`CLOUDFLARE_API_TOKEN`)
- [ ] Pages project created (`leadership-legacy`)
- [ ] Worker deployed
- [ ] GitHub Actions workflow configured
- [ ] First deployment successful
- [ ] URLs tested and working
- [ ] Custom domain configured (optional)
- [ ] Monitoring set up

---

**Last Updated:** 2025-12-31
**Maintained by:** Connor McNeely
