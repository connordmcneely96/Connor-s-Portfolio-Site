# 🚀 Leadership Legacy Web App - Deployment & Sync Guide

> **Quick sync guide for Connor and team to get up to speed on the Leadership Legacy deployment**

---

## 📋 QUICK OVERVIEW

**Project:** Leadership Legacy Web App  
**Repository:** `InnerAnimal/ll_connors_leadership_legacy_launch`  
**Vercel Project:** `leadership_legacy` (ID: `prj_PsgtXu17SAWZrpxmFOIJfk1NC3yh`)  
**Domain:** `leadershiplegacy.vercel.app`  
**Status:** ✅ Live & Deployed  

---

## 🎯 WHAT IS THIS PROJECT?

**Leadership Legacy** is Connor's personal leadership and portfolio web application. It showcases:
- Professional portfolio
- Leadership insights and content
- Coaching and mentorship resources
- Personal brand presence

---

## 🔑 CREDENTIALS & ACCESS

### **Vercel Dashboard**
- **Team:** `meauxbilityorg` (Team ID: `team_eMhajA4eD6XUAGomNi6CnQeZ`)
- **Project:** `leadership_legacy`
- **Dashboard:** https://vercel.com/meauxbilityorg/leadership_legacy
- **Production URL:** `leadershiplegacy-meauxbilityorg.vercel.app`
- **Preview URL:** `leadershiplegacy-git-main-meauxbilityorg.vercel.app`

### **GitHub Repository**
- **Organization:** `InnerAnimal`
- **Repository:** `ll_connors_leadership_legacy_launch`
- **URL:** https://github.com/InnerAnimal/ll_connors_leadership_legacy_launch
- **Branch:** `main` (production branch)
- **Full Path:** `InnerAnimal/ll_connors_leadership_legacy_launch`

### **Vercel API Access**
- **API Token:** (Stored securely - ask Sam for access)
- **Team ID:** `team_eMhajA4eD6XUAGomNi6CnQeZ`
- **Project ID:** `prj_PsgtXu17SAWZrpxmFOIJfk1NC3yh`

---

## 🚀 QUICK START - GET IN SYNC

### **Step 1: Clone the Repository**

```bash
# Clone the repo
git clone https://github.com/InnerAnimal/ll_connors_leadership_legacy_launch.git
cd ll_connors_leadership_legacy_launch

# Check current branch
git branch
# Should show: * main
```

### **Step 2: Check Current Status**

```bash
# See latest commits
git log --oneline -10

# Check for uncommitted changes
git status

# See current deployment status
curl -s "https://api.vercel.com/v9/projects/prj_PsgtXu17SAWZrpxmFOIJfk1NC3yh?teamId=team_eMhajA4eD6XUAGomNi6CnQeZ" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq '.targets.production.url'
```

### **Step 3: Set Up Local Development**

```bash
# Install dependencies (if package.json exists)
npm install
# OR
yarn install

# Run local dev server (if configured)
npm run dev
# OR
yarn dev

# Default dev server usually runs on:
# http://localhost:3000 (Next.js)
# http://localhost:5173 (Vite)
```

---

## 📦 DEPLOYMENT PROCESS

### **Automatic Deployment (Recommended)**

**Vercel automatically deploys when you push to `main` branch:**

```bash
# Make your changes
git add .
git commit -m "Your commit message"
git push origin main

# Vercel will automatically:
# 1. Detect the push
# 2. Build the project
# 3. Deploy to production
# 4. Update preview URLs
```

**Monitor deployment:**
- Vercel Dashboard: https://vercel.com/meauxbilityorg/leadership_legacy
- Or check GitHub Actions (if configured)

### **Manual Deployment via Vercel CLI**

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Login to Vercel
vercel login

# Link to project (first time only)
vercel link --project=prj_PsgtXu17SAWZrpxmFOIJfk1NC3yh --team=team_eMhajA4eD6XUAGomNi6CnQeZ

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### **Deploy via API (For Automation)**

```bash
# Deploy using Vercel API
curl -X POST "https://api.vercel.com/v13/deployments?teamId=team_eMhajA4eD6XUAGomNi6CnQeZ" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "leadership_legacy",
    "project": "prj_PsgtXu17SAWZrpxmFOIJfk1NC3yh",
    "gitSource": {
      "type": "github",
      "repo": "InnerAnimal/ll_connors_leadership_legacy_launch",
      "ref": "main"
    }
  }'
```

---

## 🔧 ENVIRONMENT SETUP

### **Environment Variables**

**If the project uses environment variables, set them in Vercel:**

1. Go to: https://vercel.com/meauxbilityorg/leadership_legacy/settings/environment-variables
2. Add required variables for:
   - Production
   - Preview
   - Development

**Common variables might include:**
- `NEXT_PUBLIC_APP_URL`
- `API_KEYS` (if needed)
- `ANALYTICS_KEYS` (if using analytics)

### **Local Environment File**

**If you need to run locally, create `.env.local`:**

```bash
# Copy example env file (if exists)
cp .env.example .env.local

# Edit with your values
nano .env.local
# OR
code .env.local
```

---

## 📁 PROJECT STRUCTURE

```
ll_connors_leadership_legacy_launch/
├── README.md (this file)
├── package.json (dependencies & scripts)
├── .vercel/ (Vercel config - don't commit)
├── .gitignore (ignored files)
├── public/ (static assets)
├── src/ (or app/, pages/, etc. - source code)
└── [framework-specific files]
```

---

## 🔄 SYNC WORKFLOW

### **Standard Git Workflow**

```bash
# 1. Fetch latest changes
git fetch origin

# 2. Check what's different
git status

# 3. Pull latest changes (if working on main)
git pull origin main

# 4. Make your changes
# ... edit files ...

# 5. Stage changes
git add .

# 6. Commit with clear message
git commit -m "feat: add new feature" 
# OR
git commit -m "fix: resolve bug in X"
# OR
git commit -m "style: update UI design"

# 7. Push to GitHub
git push origin main

# 8. Vercel auto-deploys ✨
```

### **Branch Workflow (For Features)**

```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes
# ... edit files ...

# Commit changes
git add .
git commit -m "feat: add new feature"

# Push branch
git push origin feature/new-feature

# Create Pull Request on GitHub
# Merge PR → Vercel deploys automatically
```

---

## 🎨 CURRENT PROJECT STATUS

**Last Checked:** $(date)

**Status:**
- ✅ **Production:** Live and deployed
- ✅ **GitHub:** Connected to Vercel
- ✅ **Auto-Deploy:** Enabled (pushes to `main` deploy automatically)
- ✅ **Domain:** `leadershiplegacy.vercel.app`

**Framework:** Next.js (based on project structure)

**Recent Deployments:**
- Check Vercel Dashboard for latest deployment info
- Check GitHub commits for recent changes

---

## 🔍 TROUBLESHOOTING

### **Deployment Fails**

**Check:**
1. Vercel Dashboard → Deployments → Click failed deployment → View logs
2. GitHub Actions (if configured) → Check workflow runs
3. Local build test: `npm run build` (should succeed locally)

**Common Issues:**
- ❌ Build errors → Check build logs in Vercel
- ❌ Missing env vars → Add in Vercel Dashboard
- ❌ Dependency errors → Run `npm install` locally first

### **Changes Not Reflecting**

**Check:**
1. Did you push to `main` branch?
2. Is Vercel connected to correct branch? (should be `main`)
3. Wait 1-2 minutes for deployment to complete
4. Clear browser cache if needed

### **Can't Access Vercel**

**Ask Sam for:**
- Vercel team access
- API token (if needed for automation)
- Project permissions

---

## 📚 RESOURCES & LINKS

### **Quick Links**
- **Vercel Dashboard:** https://vercel.com/meauxbilityorg/leadership_legacy
- **GitHub Repo:** https://github.com/InnerAnimal/ll_connors_leadership_legacy_launch
- **Production Site:** `leadershiplegacy-meauxbilityorg.vercel.app`
- **Vercel Docs:** https://vercel.com/docs

### **Team Resources**
- **Organization:** `InnerAnimal` on GitHub
- **Vercel Team:** `meauxbilityorg`
- **Main Contact:** Sam (for Vercel/API access)

### **Related Projects**
- Check `PROJECT_DELEGATION_MAP.md` in `/Users/brandonprimeaux/cloudflare-workspace/godmode` for other projects

---

## 🚦 NEXT STEPS FOR CONNOR

1. ✅ **Clone the repo** and get familiar with the codebase
2. ✅ **Test locally** - run `npm install && npm run dev`
3. ✅ **Review current deployment** - check Vercel Dashboard
4. ✅ **Make a small change** - push to `main` and watch it deploy
5. ✅ **Set up your local environment** - create `.env.local` if needed

---

## 📝 NOTES

- **Auto-deploy is ON** - pushes to `main` deploy automatically
- **No manual deployment needed** - just push to GitHub
- **Vercel handles builds** - no need to build locally before push
- **Preview deployments** - PRs get preview URLs automatically

---

## 🤝 COLLABORATION

**Working with Sam:**
- Sam has Vercel API access for automation
- Coordinate on major changes via GitHub PRs
- Use GitHub Issues for bug tracking
- Use GitHub Discussions for questions

**Best Practices:**
- ✅ Clear commit messages
- ✅ Small, focused PRs
- ✅ Test locally before pushing
- ✅ Review Vercel deployment logs after push

---

**Questions? Ask Sam or check Vercel Dashboard!** 🚀

