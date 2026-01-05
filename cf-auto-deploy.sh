#!/usr/bin/env bash
# Automated deploy to Cloudflare Workers and Pages from Git Bash.
# Prereqs: Node/npm, wrangler CLI (or CLOUDFLARE_API_TOKEN), project IDs set in wrangler.toml.

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_NAME="${CF_PAGES_PROJECT:-leadership-legacy}"
BUILD_DIR="${CF_PAGES_OUTPUT:-out}"

echo "🔧 Cloudflare deploy starting..."
echo "Project: ${PROJECT_NAME}"

if ! command -v wrangler >/dev/null 2>&1; then
  echo "wrangler not found; installing globally..."
  npm install -g wrangler
fi

if ! wrangler whoami >/dev/null 2>&1; then
  echo "❌ Cloudflare auth missing."
  echo "Run 'wrangler login' once in this shell or set CLOUDFLARE_API_TOKEN, then rerun."
  exit 1
fi

cd "${ROOT_DIR}"

if [ ! -d node_modules ]; then
  echo "📦 Installing dependencies..."
  npm ci || npm install
fi

echo "🏗️  Building static Leadership Legacy site for Pages..."
rm -rf "${BUILD_DIR}"
mkdir -p "${BUILD_DIR}"
cp -R apps/leadership-legacy/* "${BUILD_DIR}/"

echo "🚀 Deploying Worker..."
wrangler deploy

echo "🚀 Deploying Pages (${BUILD_DIR})..."
wrangler pages deploy "${BUILD_DIR}" --project-name="${PROJECT_NAME}"

echo "✅ Deploy complete."


