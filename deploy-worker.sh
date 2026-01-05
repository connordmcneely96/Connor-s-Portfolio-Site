#!/usr/bin/env bash
#
# Deploy Cloudflare Worker only (API/backend).
#
# Requirements:
# - wrangler authenticated (either `wrangler login` or `CLOUDFLARE_API_TOKEN` set)
#
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "${ROOT_DIR}"

if ! command -v wrangler >/dev/null 2>&1; then
  echo "wrangler not found; installing globally..."
  npm install -g wrangler
fi

if ! wrangler whoami >/dev/null 2>&1; then
  echo "❌ Cloudflare auth missing."
  echo "Run: wrangler login"
  echo "Or set: CLOUDFLARE_API_TOKEN"
  exit 1
fi

echo "🚀 Deploying Cloudflare Worker..."
wrangler deploy
echo "✅ Worker deploy complete."
