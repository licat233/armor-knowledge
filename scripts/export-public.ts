#!/usr/bin/env node
/**
 * scripts/export-public.ts
 *
 * Deterministic public-content export for the ARMOR Knowledge site.
 *
 * Reads Markdown files from a source Obsidian vault and copies only files
 * whose frontmatter contains `public: true` into the site content directory
 * (content/<category>/). Files with `public: false` or with no `public` key
 * are NEVER exported.
 *
 * This script NEVER runs during `npx quartz build`. It must be invoked
 * explicitly.
 *
 * Usage:
 *   npx tsx scripts/export-public.ts [sourceDir] [--dry-run] [--dest <dir>]
 *
 *   sourceDir   Path to the vault root. Defaults to $ARMOR_VAULT_ROOT, then
 *               /Users/licat/armor-vault.
 *   --dry-run   Print what would be exported without writing anything.
 *   --dest      Destination root (defaults to the repo's content/). Useful
 *               for previewing exports into a temporary directory.
 *
 * Safety:
 *   - Only the approved source directories in SOURCE_DIR_MAPPING are scanned.
 *     Every other vault directory is ignored and never read, so private
 *     content cannot leak into the public site.
 *   - IGNORED_DIRS are never entered, even inside an approved directory.
 *   - Non-Markdown files (attachments, images, ...) are never copied.
 *   - Exported paths are verified to stay inside the destination root.
 *   - The `public` key is stripped from the frontmatter of exported files.
 */

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import YAML from "yaml"

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const DEFAULT_DEST = path.join(REPO_ROOT, "content")
const DEFAULT_SOURCE = process.env.ARMOR_VAULT_ROOT ?? "/Users/licat/armor-vault"

/**
 * Approved source directory -> destination category directory.
 * Only these top-level directories inside the vault are ever scanned.
 */
const SOURCE_DIR_MAPPING: Record<string, string> = {
  "01-Knowledge/Products": "Products",
  "01-Knowledge/Solutions": "Solutions",
  "01-Knowledge/Technology": "Technology",
  "01-Knowledge/Insights": "Insights",
  "01-Knowledge/Resources": "Resources",
}

/** Directories that are never entered, even inside an approved directory. */
const IGNORED_DIRS = new Set([
  ".obsidian",
  ".trash",
  ".git",
  "private",
  "00-System",
  "02-Projects",
  "03-Records",
  "04-Research",
  "90-Inbox",
  "99-Archive",
  "templates",
])

const MARKDOWN_EXTS = new Set([".md", ".markdown"])

const USAGE = `Usage: npx tsx scripts/export-public.ts [sourceDir] [--dry-run] [--dest <dir>]`

interface ExportItem {
  from: string
  to: string
  relSource: string
  category: string
}

interface Summary {
  exported: number
  skippedNoFrontmatter: number
  skippedNotPublic: number
  skippedExplicitFalse: number
  skippedNotMarkdown: number
  skippedMissingApprovedDir: number
  byCategory: Map<string, number>
  errors: string[]
}

function walkFiles(dir: string): string[] {
  const out: string[] = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (IGNORED_DIRS.has(entry.name)) continue
      out.push(...walkFiles(path.join(dir, entry.name)))
    } else if (entry.isFile()) {
      out.push(path.join(dir, entry.name))
    }
  }
  return out
}

function isMarkdown(file: string): boolean {
  return MARKDOWN_EXTS.has(path.extname(file).toLowerCase())
}

function isWithinRoot(root: string, file: string): boolean {
  const rel = path.relative(root, file)
  return rel !== "" && !rel.startsWith("..") && !path.isAbsolute(rel)
}

/** Returns parsed frontmatter object, or null when absent or invalid YAML. */
function parseFrontmatter(raw: string): Record<string, unknown> | null {
  if (!raw.startsWith("---")) return null
  const end = raw.indexOf("\n---", 3)
  if (end === -1) return null
  try {
    return YAML.parse(raw.slice(3, end)) as Record<string, unknown>
  } catch {
    return null
  }
}

/** Removes the `public:` key from the frontmatter block of exported content. */
function stripPublicKey(raw: string): string {
  const end = raw.indexOf("\n---", 3)
  if (end === -1) return raw
  const block = raw.slice(3, end)
  const rest = raw.slice(end)
  const filtered = block
    .split("\n")
    .filter((line) => !/^\s*public\s*:/u.test(line))
    .join("\n")
  return `---${filtered}${rest}`
}

function printSummary(summary: Summary, dryRun: boolean): void {
  const action = dryRun ? "would export" : "exported"
  console.log(`\nExport summary (${action}):`)
  console.log(`  exported:            ${summary.exported}`)
  for (const [category, count] of [...summary.byCategory.entries()].sort((a, b) =>
    a[0].localeCompare(b[0]),
  )) {
    console.log(`    - ${category}: ${count}`)
  }
  console.log(`  skipped (no frontmatter): ${summary.skippedNoFrontmatter}`)
  console.log(`  skipped (public: false):  ${summary.skippedExplicitFalse}`)
  console.log(`  skipped (public missing): ${summary.skippedNotPublic}`)
  console.log(`  skipped (not markdown):   ${summary.skippedNotMarkdown}`)
  console.log(`  skipped (missing source):  ${summary.skippedMissingApprovedDir}`)
  if (summary.errors.length > 0) {
    console.log(`  errors: ${summary.errors.length}`)
    for (const error of summary.errors) {
      console.log(`    ! ${error}`)
    }
  }
}

function main(): void {
  const argv = process.argv.slice(2)
  let dryRun = false
  let destRoot = DEFAULT_DEST
  const positionals: string[] = []

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === "--dry-run") {
      dryRun = true
    } else if (arg === "--dest") {
      destRoot = argv[++i]
      if (!destRoot) {
        console.error(`Error: --dest requires a directory argument.\n\n${USAGE}`)
        process.exit(1)
      }
    } else if (arg === "--help" || arg === "-h") {
      console.log(USAGE)
      process.exit(0)
    } else {
      positionals.push(arg)
    }
  }

  if (positionals.length > 1) {
    console.error(`Error: too many arguments: ${positionals.join(" ")}\n\n${USAGE}`)
    process.exit(1)
  }

  const sourceDir = path.resolve(positionals[0] ?? DEFAULT_SOURCE)
  destRoot = path.resolve(destRoot)

  // Guard: never allow the vault and the site content to be the same tree.
  if (
    sourceDir === destRoot ||
    sourceDir.startsWith(destRoot + path.sep) ||
    destRoot.startsWith(sourceDir + path.sep)
  ) {
    console.error("Error: source vault and destination content directory must be separate trees.")
    process.exit(1)
  }
  if (!fs.existsSync(sourceDir) || !fs.statSync(sourceDir).isDirectory()) {
    console.error(`Error: source vault directory not found: ${sourceDir}`)
    process.exit(1)
  }
  if (!fs.existsSync(destRoot) || !fs.statSync(destRoot).isDirectory()) {
    console.error(`Error: destination directory not found: ${destRoot}`)
    process.exit(1)
  }

  const summary: Summary = {
    exported: 0,
    skippedNoFrontmatter: 0,
    skippedNotPublic: 0,
    skippedExplicitFalse: 0,
    skippedNotMarkdown: 0,
    skippedMissingApprovedDir: 0,
    byCategory: new Map<string, number>(),
    errors: [],
  }

  const planned: ExportItem[] = []

  for (const [srcName, destCategory] of Object.entries(SOURCE_DIR_MAPPING)) {
    const srcDir = path.join(sourceDir, srcName)
    if (!fs.existsSync(srcDir) || !fs.statSync(srcDir).isDirectory()) {
      summary.skippedMissingApprovedDir++
      continue
    }
    const destDir = path.join(destRoot, destCategory)
    for (const file of walkFiles(srcDir)) {
      const relSource = path.join(srcName, path.relative(srcDir, file))
      if (!isMarkdown(file)) {
        summary.skippedNotMarkdown++
        continue
      }
      const destFile = path.join(destDir, path.relative(srcDir, file))
      if (!isWithinRoot(destRoot, destFile)) {
        summary.errors.push(`Refusing to write outside destination root: ${destFile}`)
        continue
      }
      const raw = fs.readFileSync(file, "utf-8")
      const frontmatter = parseFrontmatter(raw)
      if (frontmatter === null) {
        summary.skippedNoFrontmatter++
        continue
      }
      if (frontmatter.public === false) {
        summary.skippedExplicitFalse++
        continue
      }
      if (frontmatter.public !== true) {
        summary.skippedNotPublic++
        continue
      }
      planned.push({ from: file, to: destFile, relSource, category: destCategory })
    }
  }

  if (dryRun) {
    console.log(`[dry-run] Source: ${sourceDir}`)
    console.log(`[dry-run] Destination: ${destRoot}`)
    for (const item of planned) {
      console.log(`  + ${item.relSource} -> content/${item.category}/`)
    }
    summary.exported = planned.length
    printSummary(summary, true)
    return
  }

  let copied = 0
  for (const item of planned) {
    try {
      const raw = fs.readFileSync(item.from, "utf-8")
      fs.mkdirSync(path.dirname(item.to), { recursive: true })
      fs.writeFileSync(item.to, stripPublicKey(raw))
      copied++
      summary.byCategory.set(item.category, (summary.byCategory.get(item.category) ?? 0) + 1)
    } catch (err) {
      summary.errors.push(
        `Failed to export ${item.relSource}: ${err instanceof Error ? err.message : String(err)}`,
      )
    }
  }
  summary.exported = copied
  printSummary(summary, false)

  if (summary.errors.length > 0) {
    process.exitCode = 1
  }
}

main()
