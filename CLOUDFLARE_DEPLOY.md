# Deploying ARMOR Knowledge to Cloudflare Pages

> [!important]
> **Deployment is intentionally NOT performed yet.** This document records the
> exact settings to use when the project owner approves going live. Do not
> create a Cloudflare Pages project or run `wrangler` until then.

## One-time project setup

Create a new Cloudflare Pages project with these settings:

| Setting           | Value                                    |
| ----------------- | ---------------------------------------- |
| Framework preset  | **None** (do not pick a framework)       |
| Build command     | `npx quartz build`                       |
| Build output dir  | `public`                                 |
| Node.js version   | **22**                                   |
| Root directory    | `/` (repository root)                    |
| Production branch | `v5` (the branch this site is pushed on) |

When connecting the project, select the GitHub repository
`licat233/armor-knowledge`.

## Per-build behavior

`npx quartz build` reads `quartz.config.yaml`, processes `content/`, and writes
the static site to `public/`. Cloudflare Pages serves that output directory
directly. No server-side rendering is involved.

## Before going live

1. Set `baseUrl` in `quartz.config.yaml` to the deployed domain once it is
   known (e.g. `armor-knowledge.pages.dev` or a custom domain). The CNAME
   emitter writes `public/CNAME` from this value. Until it is set, the build
   skips the CNAME file.
2. Optionally enable analytics in `quartz.config.yaml` (currently `null`).
3. Verify the public export workflow (`scripts/README.md`) is understood.

## Custom domain (later)

Once the Pages project exists:

1. In Cloudflare dashboard, add the custom domain to the Pages project.
2. Update `baseUrl` in `quartz.config.yaml` to the custom domain and rebuild.
3. DNS: add a `CNAME` record pointing the domain to the Pages project
   (Cloudflare will suggest the target).

## Updating the site

The site is updated by committing and pushing to the `v5` branch of
`licat233/armor-knowledge`. Cloudflare Pages redeploys automatically on push
(once the project is connected). See `scripts/README.md` for how content gets
into `content/` in the first place.
