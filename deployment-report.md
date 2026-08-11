# ARMOR Knowledge — Deployment Report

Status: **live on Cloudflare Pages.**

Live URL: https://armor-knowledge.pages.dev/

## Completed (local)

- [x] Quartz v5 site configured as **ARMOR Knowledge** in `quartz.config.yaml`
  - SPA navigation enabled
  - Obsidian backlinks, Explorer, Search, Graph View, and link popovers enabled
  - Clean public knowledge-site layout (standard Quartz components)
- [x] Content structure created under `content/`
  - `index.md` home page
  - `Products/`, `Solutions/`, `Technology/`, `Insights/`, `Resources/`
    category pages with minimal non-sensitive landing pages
  - `Resources/publishing-workflow.md` — public explanation of how content is
    published
- [x] Public export workflow (`scripts/export-public.ts` + `scripts/README.md`)
  - Exports only Markdown files whose frontmatter contains `public: true`
  - Never reads the private vault wholesale; only approved source directories
    are scanned
  - Supports `--dry-run` and summary output; never runs during build
  - Verified against a disposable fixture: `public: true` notes exported,
    `public: false` / missing-`public` notes not exported
- [x] `npx quartz build` verified (see checks below)
- [x] Documentation added: `CLOUDFLARE_DEPLOY.md`, `deployment-report.md`
- [x] `.gitignore` already excludes `public/`, `.obsidian`, `private/`,
      `node_modules`, and build caches
- [x] Cloudflare Pages project `armor-knowledge` created
- [x] Production deployment uploaded from branch `v5`
- [x] Live URL verified with HTTP 200 and page title `ARMOR Knowledge`

## Notes / deviations from the original task plan

- **Configuration format**: This Quartz v5 checkout configures the site with
  `quartz.config.yaml` (YAML). The upstream TypeScript files
  (`quartz.config.ts` / `quartz.layout.ts`) do not exist in this fork — Quartz 5
  migrated to YAML config (see `docs/getting-started/migrating.md`). The
  equivalent configuration was created in `quartz.config.yaml`, which overrides
  the bundled `quartz.config.default.yaml`.

## GitHub repository

- Repository: https://github.com/licat233/armor-knowledge
- Created/pushed as part of this task; the `v5` branch is the default branch.
- Upstream Quartz source is kept as the `upstream` git remote.

## Deployment

- **Cloudflare Pages project:** `armor-knowledge`
- **Live URL:** https://armor-knowledge.pages.dev/
- **Production branch:** `v5`
- **Build command:** `npx quartz build`
- **Output directory:** `public`
- **Node.js:** 22 (`NODE_VERSION=22` and `.node-version`)
- **Framework preset:** None
- **Deployment mode:** Direct Upload via Wrangler
- **Latest deployment:** `https://6947a5b5.armor-knowledge.pages.dev`
- **Latest commit:** `30a59ad7684cf74ec9565f182790685aa7343b1a`
- **Git Provider:** Not connected. This Direct Upload project cannot be
  switched to Git Integration later; see `CLOUDFLARE_DEPLOY.md` for options.

## Next steps

1. Export real content via the public export workflow.
2. Build and publish updated `public/` output with Wrangler.
3. If automatic GitHub deployments are required, create a separate
   Git-integrated Pages project and select `licat233/armor-knowledge` / `v5`.
4. Optionally configure a custom domain and analytics.
