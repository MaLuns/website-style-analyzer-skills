#!/usr/bin/env node

import fs from "fs";
import path from "path";

const argv = process.argv.slice(2);
const RESULT_FILES = ["brand-tokens.md", "tokens.json", "page-inventory.md"];
const COMPONENTS_DIR = "components";

function printUsage() {
  console.log(
    [
      "Usage:",
      "  node scripts/init-output.mjs --target-url <url> [--output-dir <dir>] [--max-pages <n>] [--include-subdomains <true|false>] [--theme <light|dark|both>] [--overwrite]",
      "",
      "Examples:",
      "  node scripts/init-output.mjs --target-url https://example.com",
      "  node scripts/init-output.mjs --target-url https://example.com --output-dir ./output",
      "  node scripts/init-output.mjs --target-url https://example.com --output-dir ./output --max-pages 20 --include-subdomains false --theme dark --overwrite"
    ].join("\n")
  );
}

function parseArgs(args) {
  const options = {
    targetUrl: "",
    outputDir: "./style-guide",
    maxPages: 30,
    includeSubdomains: true,
    theme: "light",
    overwrite: false
  };

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg === "--help" || arg === "-h") {
      printUsage();
      process.exit(0);
    }
    if (arg === "--overwrite") {
      options.overwrite = true;
      continue;
    }
    const next = args[i + 1];
    if (!next || next.startsWith("--")) {
      throw new Error(`Missing value for ${arg}`);
    }
    if (arg === "--target-url") {
      options.targetUrl = next;
      i += 1;
      continue;
    }
    if (arg === "--output-dir") {
      options.outputDir = next;
      i += 1;
      continue;
    }
    if (arg === "--max-pages") {
      const parsed = Number.parseInt(next, 10);
      if (!Number.isInteger(parsed) || parsed <= 0) {
        throw new Error(`Invalid --max-pages value: ${next}`);
      }
      options.maxPages = parsed;
      i += 1;
      continue;
    }
    if (arg === "--include-subdomains") {
      const normalized = next.toLowerCase();
      if (normalized !== "true" && normalized !== "false") {
        throw new Error(`Invalid --include-subdomains value: ${next}`);
      }
      options.includeSubdomains = normalized === "true";
      i += 1;
      continue;
    }
    if (arg === "--theme") {
      const normalized = next.toLowerCase();
      if (!["light", "dark", "both"].includes(normalized)) {
        throw new Error(`Invalid --theme value: ${next}`);
      }
      options.theme = normalized;
      i += 1;
      continue;
    }
    throw new Error(`Unknown argument: ${arg}`);
  }

  if (!options.targetUrl) {
    throw new Error("Missing required argument: --target-url");
  }
  return options;
}

function canonicalizeUrl(input) {
  let parsed;
  try {
    parsed = new URL(input);
  } catch {
    throw new Error(`Invalid target URL: ${input}`);
  }
  if (!["http:", "https:"].includes(parsed.protocol)) {
    throw new Error(`Invalid target URL protocol: ${parsed.protocol}. Use http or https.`);
  }
  if (!parsed.host) {
    throw new Error(`Invalid target URL host: ${input}`);
  }
  const canonical = parsed.href.replace(/\/+$/, "");
  return {
    canonical,
    host: parsed.host.toLowerCase()
  };
}

function resetKnownArtifacts(outputPath) {
  for (const fileName of RESULT_FILES) {
    const filePath = path.join(outputPath, fileName);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      fs.rmSync(filePath, { force: true });
    }
  }

  const componentsPath = path.join(outputPath, COMPONENTS_DIR);
  if (fs.existsSync(componentsPath)) {
    fs.rmSync(componentsPath, { recursive: true, force: true });
  }
}

function prepareOutputDir(outputPath, overwrite) {
  if (fs.existsSync(outputPath)) {
    const outputStat = fs.statSync(outputPath);
    if (!outputStat.isDirectory()) {
      throw new Error(`Output path is not a directory: ${outputPath}`);
    }
    const entries = fs.readdirSync(outputPath);
    if (entries.length > 0 && !overwrite) {
      throw new Error(
        `Output directory is not empty: ${outputPath}. Re-run with --overwrite to reset known analysis artifacts.`
      );
    }
    if (overwrite) {
      resetKnownArtifacts(outputPath);
    }
  } else {
    fs.mkdirSync(outputPath, { recursive: true });
  }

  fs.mkdirSync(path.join(outputPath, COMPONENTS_DIR), { recursive: true });
}

function main() {
  const options = parseArgs(argv);
  const target = canonicalizeUrl(options.targetUrl);

  const outputPath = path.resolve(options.outputDir);
  prepareOutputDir(outputPath, options.overwrite);

  console.log("Initialized website style analysis workspace:");
  console.log(`  Target URL: ${target.canonical}`);
  console.log(`  Output Dir: ${outputPath}`);
  console.log(`  Max Pages : ${options.maxPages}`);
  console.log(`  Subdomain : ${options.includeSubdomains}`);
  console.log(`  Theme     : ${options.theme}`);
  console.log(`  Overwrite : ${options.overwrite}`);
  if (options.overwrite) {
    console.log("  Reset     : removed known analysis artifacts");
  }
  console.log("  Mode      : directory-only (templates are not copied)");
}

try {
  main();
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}

