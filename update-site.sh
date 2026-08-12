#!/usr/bin/env bash
#
# update-site.sh — build the ARMOR Knowledge Quartz site and publish it to
# Cloudflare Pages (Direct Upload).
#
# This Pages project uses Direct Upload: its Git provider is not connected, so
# pushing to GitHub does NOT deploy automatically. Git (the v5 branch) remains
# the source of truth for the site source; this script builds locally and
# uploads the generated public/ directory to Cloudflare Pages.
#
# No git add/commit/push is performed by this script. Commit the source on the
# v5 branch as the record of what was published, then run this script to
# publish it.

set -Eeuo pipefail

# --- Resolve this repository's root (works from any CWD) -----------------------
SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

PROJECT="${CLOUDFLARE_PAGES_PROJECT:-armor-knowledge}"
BRANCH="${CLOUDFLARE_PAGES_BRANCH:-v5}"
DRY_RUN=0

usage() {
  cat <<'EOF'
update-site.sh — build the ARMOR Knowledge Quartz site and publish it to
Cloudflare Pages (Direct Upload).

This Pages project uses Direct Upload: its Git provider is not connected, so
pushing to GitHub does NOT deploy automatically. Git (the v5 branch) remains
the source of truth; this script builds locally and uploads the generated
public/ directory to Cloudflare Pages.

Usage:
  ./update-site.sh              build and deploy to Pages
  ./update-site.sh --dry-run    build and report the deploy step, but do not upload
  ./update-site.sh --help       show this help and exit

Environment overrides:
  CLOUDFLARE_PAGES_PROJECT   Pages project name (default: armor-knowledge)
  CLOUDFLARE_PAGES_BRANCH    Pages branch (default: v5)

Notes:
  - No git add/commit/push is performed. Commit source on v5 as the record of
    what was published, then run this script to publish it.
  - Cloudflare credentials are read by wrangler from its own auth (API token
    or `wrangler login`); this script never prints or stores token values.
EOF
}

for arg in "$@"; do
  case "$arg" in
    --help | -h)
      usage
      exit 0
      ;;
    --dry-run)
      DRY_RUN=1
      ;;
    *)
      echo "update-site.sh: unknown argument: $arg" >&2
      echo "Run './update-site.sh --help' for usage." >&2
      exit 2
      ;;
  esac
done

# --- Preflight: required tool and files -----------------------------------------
if ! command -v npx >/dev/null 2>&1; then
  echo "update-site.sh: error: npx not found in PATH" >&2
  echo "Install Node.js >= 22 (npm >= 10.9.2) and try again." >&2
  exit 1
fi

for required in package.json quartz.config.yaml content; do
  if [ ! -e "$SCRIPT_DIR/$required" ]; then
    echo "update-site.sh: error: required file/directory not found: $SCRIPT_DIR/$required" >&2
    echo "Run this script from inside the ARMOR Knowledge Quartz checkout." >&2
    exit 1
  fi
done

# --- Build ------------------------------------------------------------------------
echo ">> Building Quartz site in $SCRIPT_DIR"
npx quartz build

# --- Verify the build output -------------------------------------------------------
PUBLIC_DIR="$SCRIPT_DIR/public"
if [ ! -d "$PUBLIC_DIR" ]; then
  echo "update-site.sh: error: build produced no output directory: $PUBLIC_DIR" >&2
  exit 1
fi

FILE_COUNT="$(find "$PUBLIC_DIR" -type f | wc -l | tr -d ' ')"
if [ "$FILE_COUNT" -eq 0 ]; then
  echo "update-site.sh: error: build produced an empty output directory: $PUBLIC_DIR" >&2
  exit 1
fi

DEPLOY_CMD=(npx --yes wrangler@latest pages deploy "$PUBLIC_DIR" --project-name "$PROJECT" --branch "$BRANCH")

echo ">> Built ${FILE_COUNT} file(s) into $PUBLIC_DIR"
echo ">> Project: $PROJECT   Branch: $BRANCH"

if [ "$DRY_RUN" -eq 1 ]; then
  echo ">> DRY RUN: not uploading. Would run:"
  printf '   %s\n' "${DEPLOY_CMD[*]}"
  exit 0
fi

echo ">> Deploying to Cloudflare Pages ($PROJECT / $BRANCH)"
"${DEPLOY_CMD[@]}"
