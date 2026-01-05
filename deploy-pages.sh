#!/usr/bin/env bash
#
# Deploy Cloudflare Pages only (static frontend).
#
# This deploys the static site located in: apps/leadership-legacy/
# It builds a deployable directory at: out/
#
# Requirements:
# - wrangler authenticated (either `wrangler login` or `CLOUDFLARE_API_TOKEN` set)
#
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "${ROOT_DIR}"

PROJECT_NAME="${CF_PAGES_PROJECT:-leadership-legacy}"
SITE_DIR="${CF_PAGES_SITE_DIR:-apps/leadership-legacy}"
OUT_DIR="${CF_PAGES_OUTPUT:-out}"

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

if [ ! -d "${SITE_DIR}" ]; then
  echo "❌ Static site directory not found: ${SITE_DIR}"
  exit 1
fi

echo "🏗️  Building Pages output (${OUT_DIR}) from ${SITE_DIR}..."
rm -rf "${OUT_DIR}"
mkdir -p "${OUT_DIR}"
cp -R "${SITE_DIR}/"* "${OUT_DIR}/"

if [ ! -f "${OUT_DIR}/index.html" ]; then
  echo "❌ Build output missing ${OUT_DIR}/index.html"
  exit 1
fi

echo "🚀 Deploying to Cloudflare Pages (project: ${PROJECT_NAME})..."
# Deploy from a temp directory so Wrangler doesn't pick up the Worker wrangler.toml.
TMP_DIR="$(mktemp -d)"
cleanup() {
  rm -rf "${TMP_DIR}"
}
trap cleanup EXIT

cp -R "${OUT_DIR}/." "${TMP_DIR}/"
wrangler --cwd "${TMP_DIR}" pages deploy . --project-name="${PROJECT_NAME}"
echo "✅ Pages deploy complete."
