---
title: Publishing Workflow
description: How content on this site is reviewed and published
tags:
  - resources
  - publishing
---

# Publishing Workflow

This site is built from the `content/` directory in the ARMOR Knowledge
repository. Nothing is published automatically.

## Review gate

Content is copied from the private ARMOR vault into this site only by an
explicit export step. The export tool copies **only** Markdown files whose
frontmatter contains:

```yaml
public: true
```

Files that are marked `public: false` — or have no `public` field at all — are
never exported. The private vault itself is never read in full; only approved
top-level directories (Products, Solutions, Technology, Insights, Resources)
are ever scanned.

## Process

1. In the vault, add `public: true` to the frontmatter of any note intended
   for this site.
2. Run the export (see the repository's `scripts/README.md` for exact
   commands), reviewing the dry-run summary first.
3. Build and review the site locally.
4. Commit and push. Deployment happens separately through Cloudflare Pages
   (see `CLOUDFLARE_DEPLOY.md`).

> [!important]
> A note is public **only** when its frontmatter says `public: true` _and_ it
> has been exported. Either step alone is not enough.
