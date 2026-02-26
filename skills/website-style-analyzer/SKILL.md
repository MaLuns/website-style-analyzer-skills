---
name: website-style-analyzer
description: Analyze public website visual styles, primary color systems, and reusable components, then output structured style artifacts in a target directory. Use for competitor style analysis, design token extraction, component style documentation, and AI coding style references.
---

# Website Style Analyzer

Run preflight first, then initialize the output directory from invocation parameters (directory setup and artifact reset only, no template copying), and finally execute the analysis workflow with built-in templates.

## Required Capabilities

- Browser MCP capability (page navigation, snapshots, DOM/CSS inspection)
- Network access to the target website
- File write permission for the output directory
- Node.js runtime

## Invocation Contract (Required)

Accept only the following format:

```text
Use $website-style-analyzer with:
target_url: <https://example.com>
max_pages: <30>
include_subdomains: <true>
theme: <light>
overwrite: <false>
report_mode: <final_only>
```

Optional parameter (provide only when overriding the default):

```text
output_dir: <./custom-output-dir>
```

Rules:

- Read only these keys: `target_url`, `output_dir`, `max_pages`, `include_subdomains`, `theme`, `overwrite`, `report_mode`
- Required key: `target_url`
- Optional key defaults:
  - `output_dir`: `./style-guide`
  - `max_pages`: `30`
  - `include_subdomains`: `true`
  - `theme`: `light`
  - `overwrite`: `false`
  - `report_mode`: `final_only`
- Ignore unknown keys
- Do not start analysis if parameters are invalid

## Parameter Validation Rules

- `target_url`: must be an absolute `http`/`https` URL
- `output_dir`: if provided, must be a non-empty path string
- `max_pages`: must be an integer greater than `0`
- `include_subdomains`: `true` or `false`
- `theme`: `light`, `dark`, or `both`
- `overwrite`: `true` or `false`
- `report_mode`: `final_only` or `incremental`
- When `output_dir` already exists and is non-empty, `overwrite` must be `true`

If validation fails:

1. Stop immediately
2. Return exactly:

```text
Invalid invocation parameters:
- <field>: <reason>
Please resend using the invocation template.
```

## Preflight Checks

All checks below must pass before analysis:

1. Browser MCP is available
2. Target URL is reachable
3. Output directory is writable (default `./style-guide`; if missing, it must be creatable)

If any check fails, stop and report failed checks with reasons.

## Input Parameters

- `target_url` (required): root URL of the target site
- `output_dir` (optional, default `./style-guide`): output directory
- `max_pages` (optional, default `30`): max pages to analyze
- `include_subdomains` (optional, default `true`): whether to include official subdomains
- `theme` (optional, default `light`): `light` / `dark` / `both`

## Initialization Command

```bash
node scripts/init-output.mjs --target-url "<target_url>" [--output-dir "<output_dir>"] --max-pages <max_pages> --include-subdomains <include_subdomains> --theme <theme>
```

If `overwrite` is `true`, append `--overwrite`.

Initialization behavior:

- If `output_dir` does not exist: create `output_dir` and `components/`.
- If `output_dir` exists and is non-empty with `overwrite=false`: fail initialization and ask for retry.
- If `output_dir` exists with `overwrite=true`: reset known analysis artifacts (`brand-tokens.md`, `tokens.json`, `page-inventory.md`, `components/`), then recreate `components/`.
- Never copy template files from `assets` into the output directory.

## Output Strategy

Control chat output using `report_mode`:

- `final_only` (default):
  - Run silently while writing files
  - Output one final summary at completion
- `incremental`:
  - Output concise progress only at milestones
  - Format: `Progress <done_pages>/<max_pages> | updated files: <paths> | new findings: <1-3 bullets>`

Always enforce:

- Do not dump full template files or full result files in chat
- Do not echo large placeholder-heavy boilerplate blocks
- Unless explicitly requested, return only paths and brief change summaries

## Execution Workflow

1. Parse invocation parameters and apply defaults
2. Validate all parameters; stop on failure
3. Configure output behavior based on `report_mode`
4. Run preflight checks
5. Initialize with validated parameters
6. Read `assets/task.md` and use it as the execution baseline
7. Analyze page by page and continuously update `<output_dir>/page-inventory.md`
8. Keep global tokens as `draft` during collection, then switch to `final` after consolidation
9. Use `assets/component.md` as the component template spec and write each component to `<output_dir>/components/{component}.md`
10. Complete final consolidation and consistency checks

## Mandatory Constraints

- Incrementally update only designated result files; do not create parallel duplicates
- Do not finalize tokens before component consolidation is complete
- Do not start formal analysis before preflight passes
- Do not guess missing parameters from ambiguous context
- Do not fabricate components, states, or style values to satisfy coverage; mark non-applicable items as `N/A` with rationale
- Do not output full template body unless explicitly requested
- Do not copy `assets` or any template file verbatim into output
- Component files must follow the common structure defined in `assets/component.md`
