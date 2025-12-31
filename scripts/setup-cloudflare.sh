#!/bin/bash

# Cloudflare Quick Setup Script
# Run this script once to configure your Cloudflare deployment

set -e

echo "🚀 Connor McNeely Portfolio - Cloudflare Setup"
echo "=============================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if wrangler is installed
echo "Checking for Wrangler CLI..."
if ! command -v wrangler &> /dev/null; then
    echo -e "${YELLOW}Wrangler not found. Installing...${NC}"
    npm install -g wrangler
    echo -e "${GREEN}✅ Wrangler installed${NC}"
else
    echo -e "${GREEN}✅ Wrangler is already installed${NC}"
fi

echo ""

# Authenticate with Cloudflare
echo "Authenticating with Cloudflare..."
echo -e "${YELLOW}This will open your browser for authentication.${NC}"
read -p "Press Enter to continue..."

wrangler login

echo -e "${GREEN}✅ Authenticated with Cloudflare${NC}"
echo ""

# Get account info
echo "Fetching Cloudflare account information..."
ACCOUNT_INFO=$(wrangler whoami)
echo "$ACCOUNT_INFO"
echo ""

# Create Pages project
echo "Creating Cloudflare Pages project..."
echo -e "${YELLOW}Project name: leadership-legacy${NC}"
read -p "Continue? (y/n): " confirm

if [ "$confirm" = "y" ]; then
    # Check if project exists
    PROJECT_EXISTS=$(wrangler pages project list 2>/dev/null | grep -c "leadership-legacy" || true)

    if [ "$PROJECT_EXISTS" -eq 0 ]; then
        wrangler pages project create leadership-legacy --production-branch=main
        echo -e "${GREEN}✅ Pages project created${NC}"
    else
        echo -e "${YELLOW}⚠️  Pages project already exists${NC}"
    fi
fi

echo ""

# Test deployment
echo "Testing deployment..."
echo -e "${YELLOW}This will build and deploy to Cloudflare${NC}"
read -p "Deploy now? (y/n): " deploy_confirm

if [ "$deploy_confirm" = "y" ]; then
    echo "Building application..."
    npm run build:cloudflare

    echo "Deploying to Cloudflare Pages..."
    wrangler pages deploy out --project-name=leadership-legacy

    echo "Deploying Worker..."
    wrangler deploy

    echo -e "${GREEN}✅ Deployment complete!${NC}"
fi

echo ""
echo "=============================================="
echo -e "${GREEN}🎉 Setup Complete!${NC}"
echo "=============================================="
echo ""
echo "📋 Next Steps:"
echo "1. Visit https://dash.cloudflare.com to view your deployments"
echo "2. Configure custom domain if needed"
echo "3. Set up GitHub Actions for automatic deployments"
echo ""
echo "📚 Useful Commands:"
echo "  npm run deploy:cloudflare  - Deploy to Cloudflare"
echo "  wrangler pages list        - List Pages projects"
echo "  wrangler tail              - View Worker logs"
echo ""
echo "📖 Full documentation: See DEPLOYMENT_GUIDE.md"
echo ""
