# ARMOR Knowledge — Deployment Report

Status: **initialized locally; not yet deployed.**

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

- **Cloudflare Pages project: NOT created** (intentionally deferred until the
  owner approves).
- No Pages URL yet.
- Build command for Pages: `npx quartz build` (output dir `public`, Node 22,
  framework preset **None**) — see `CLOUDFLARE_DEPLOY.md`.

## Next steps

1. Owner approves creation of the Cloudflare Pages project connected to
   `licat233/armor-knowledge` (branch `v5`).
2. Set `baseUrl` in `quartz.config.yaml` to the deployed domain.
3. Export real content via the public export workflow.
4. Optionally configure a custom domain and analytics.
