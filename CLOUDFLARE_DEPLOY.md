# ARMOR Knowledge on Cloudflare Pages

> [!important]
> **Deployment is live.** The current project was created with Wrangler Direct
> Upload and is serving the Quartz output at
> `https://armor-knowledge.pages.dev/`.

## Current project settings

| Setting           | Value                                |
| ----------------- | ------------------------------------ |
| Project name      | `armor-knowledge`                    |
| Framework preset  | **None**                             |
| Build command     | `npx quartz build`                   |
| Build output dir  | `public`                             |
| Node.js version   | **22**                               |
| Root directory    | `/` (repository root)                |
| Production branch | `v5`                                 |
| Live URL          | `https://armor-knowledge.pages.dev/` |

The Pages API stores the build command, output directory, root directory, and
`NODE_VERSION=22`. The repository also pins Node with `.node-version`.

The first production deployment was uploaded from commit
`cfafe4c4f5e75431907349c31879bb67fd5bd685`.

## Deployment mode

The project currently uses **Direct Upload**. Its Git Provider is not connected
to GitHub, so pushing to `licat233/armor-knowledge` does not trigger a build by
itself. Publish a new version with:

```bash
npx quartz build
npx wrangler pages deploy public --project-name armor-knowledge --branch v5
```

Cloudflare Pages does not support switching an existing Direct Upload project
to Git Integration later. If automatic GitHub deployments are required, create
a separate project through **Workers & Pages → Create application → Pages →
Connect to Git**, authorize the Cloudflare Workers and Pages GitHub App, then
select `licat233/armor-knowledge` and branch `v5`.

## Per-build behavior

`npx quartz build` reads `quartz.config.yaml`, processes `content/`, and writes
the static site to `public/`. Cloudflare Pages serves that output directory
directly. No server-side rendering is involved.

## Content publishing

1. Mark approved Vault notes with `public: true`.
2. Run the dry-run and export commands in `scripts/README.md`.
3. Review `git status`, build locally, and deploy the generated `public/`.
4. Optionally enable analytics in `quartz.config.yaml` (currently `null`).

## Custom domain (later)

Once a Pages project has the custom domain configured:

1. In Cloudflare dashboard, add the custom domain to the Pages project.
2. Update `baseUrl` in `quartz.config.yaml` to the custom domain and rebuild.
3. DNS: add a `CNAME` record pointing the domain to the Pages project
   (Cloudflare will suggest the target).

## Updating the current Direct Upload site

The source of truth remains the `v5` branch of
`licat233/armor-knowledge`; the current Direct Upload project is updated by
the Wrangler command above. See `scripts/README.md` for how content gets into
`content/` in the first place.
