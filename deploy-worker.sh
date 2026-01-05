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

if [ -z "${CLOUDFLARE_API_TOKEN:-}" ]; then
  echo "❌ CLOUDFLARE_API_TOKEN is not set."
  echo ""
  echo "In GitHub Codespaces, Wrangler's OAuth browser login usually fails."
  echo "Set CLOUDFLARE_API_TOKEN (Codespaces secret or export it) and retry."
  exit 1
fi

if ! command -v wrangler >/dev/null 2>&1; then
  echo "wrangler not found; installing globally..."
  npm install -g wrangler
fi

echo "🚀 Deploying Cloudflare Worker..."
wrangler deploy
echo "✅ Worker deploy complete."
