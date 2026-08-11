# Public Export Workflow

This directory contains the tooling for publishing content to the ARMOR
Knowledge site safely.

## The problem

The site is built from `content/` (see `quartz.config.yaml`). If content were
copied from the private Obsidian vault wholesale, private notes could leak into
the public site. The export script exists so that **only files explicitly
approved for public release** ever reach `content/`.

## How it works

`scripts/export-public.ts` reads a source vault and copies only Markdown files
whose frontmatter contains `public: true` into `content/<category>/`.

- Files with `public: false` or with no `public` key are **never** exported.
- Only the approved source directories under `01-Knowledge/` listed in
  `SOURCE_DIR_MAPPING` (`Products`, `Solutions`, `Technology`, `Insights`,
  `Resources`) are scanned. Every other vault directory is ignored and never
  read. A category that does not yet exist in the vault is skipped.
- Directories in `IGNORED_DIRS` (`.obsidian`, `private`, `00-System`,
  `02-Projects`, `03-Records`, `04-Research`, `90-Inbox`, `99-Archive`,
  `templates`, ...) are never entered, even inside an approved directory.
- Non-Markdown files (images, attachments, ...) are never copied.
- The `public` key is stripped from the frontmatter of exported files.

## Usage

```bash
# Preview what would be exported (writes nothing)
npx tsx scripts/export-public.ts --dry-run

# Export to the site content directory
npx tsx scripts/export-public.ts

# Point at a specific vault / export to a temporary directory for review
npx tsx scripts/export-public.ts /path/to/vault --dest /tmp/export-preview
```

The default source vault is `$ARMOR_VAULT_ROOT`, falling back to
`/Users/licat/armor-vault`.

## Safe publishing checklist

1. **Run the dry run first** and review the summary. It reports how many files
   would be exported, per category, and how many were skipped and why.
2. **Run the export** and review `git status` — every new/modified file under
   `content/` should be a file you expect to be public.
3. **Build locally** with `npx quartz build` and spot-check the output.
4. **Commit and push.** Only the exported Markdown (and hand-authored site
   pages) live under `content/`; nothing else is needed.

> [!important]
> The export script never runs during `npx quartz build`. Publishing is always
> an explicit, reviewed action.

## Removing content

If a note stops being public (e.g. `public` is removed or set to `false`), the
script will stop exporting it, but it will **not** delete the previously
exported copy. Delete the stale file under `content/` manually before the next
build.
