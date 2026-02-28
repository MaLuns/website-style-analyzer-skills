# Website Style Analyzer Skill

[中文](README.zh-CN.md) | English

Analyze public websites for visual style patterns and reusable components, then generate structured outputs that AI coding agents can use directly.

Key capabilities:
- Extract design tokens for color, typography, spacing, radius, shadow, and motion
- Document reusable component style specs (buttons, forms, cards, navigation, overlays, etc.)
- Output in a consistent format for downstream implementation

## Quick Start

1. In Codex, run:

```text
Install skill from https://github.com/MaLuns/website-style-analyzer-skills/tree/main/skills/website-style-analyzer
```

2. Restart Codex.

## Invoke the Skill

`target_url` is required. Other parameters are optional.

```text
Use $website-style-analyzer with:
target_url: https://example.com
output_dir: ./style-guide
max_pages: 30
include_subdomains: true
theme: light
overwrite: false
report_mode: final_only
```

## Output Files

Generated under `output_dir` (default `./style-guide`):
- `brand-tokens.md`
- `tokens.json`
- `page-inventory.md`
- `components/*.md`

## Manual Install (Optional)

1. Copy `skills/website-style-analyzer` to:
- `~/.codex/skills/website-style-analyzer`
- Windows: `%USERPROFILE%\\.codex\\skills\\website-style-analyzer`

2. Restart Codex.

