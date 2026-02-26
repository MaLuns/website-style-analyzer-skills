# Brand Token Document

## Metadata

- Target Site: `{{TARGET_URL}}`
- Analysis Date: `{{GENERATED_DATE}}`
- Analyst: `name`
- Version: `v0.1.0`

## Primary Color Decision

- Candidate colors:
  - `#______` (`rgb(___, ___, ___)`) - Use: `CTA/Button/Nav active`
  - `#______` (`rgb(___, ___, ___)`) - Use: `Highlight/Link`
- Weighted decision rule:
  - Brand recognizability weight: `__%`
  - CTA/key interaction frequency weight: `__%`
  - Final primary color: `#______`
- Notes:
  - Do not choose the primary color based on occurrence count alone.

## Color System

### Primary

| Token | Hex | RGB | Suggested Usage Ratio | Recommended Text Color | Contrast Result |
|---|---|---|---|---|---|
| `color.primary.50` | `#______` | `rgb(___, ___, ___)` | `__%` | `#______` | `AA / Fail` |
| `color.primary.100` | `#______` | `rgb(___, ___, ___)` | `__%` | `#______` | `AA / Fail` |
| `color.primary.500` | `#______` | `rgb(___, ___, ___)` | `__%` | `#______` | `AA / Fail` |
| `color.primary.700` | `#______` | `rgb(___, ___, ___)` | `__%` | `#______` | `AA / Fail` |

### Neutral

| Token | Hex | RGB | Use | Recommended Text Color | Contrast Result |
|---|---|---|---|---|---|
| `color.neutral.0` | `#______` | `rgb(___, ___, ___)` | `surface/base` | `#______` | `AA / Fail` |
| `color.neutral.100` | `#______` | `rgb(___, ___, ___)` | `subtle background` | `#______` | `AA / Fail` |
| `color.neutral.500` | `#______` | `rgb(___, ___, ___)` | `secondary text` | `#______` | `AA / Fail` |
| `color.neutral.900` | `#______` | `rgb(___, ___, ___)` | `primary text` | `#______` | `AA / Fail` |

### Semantic

| Token | Hex | RGB | Use | Recommended Text Color | Contrast Result |
|---|---|---|---|---|---|
| `color.semantic.success` | `#______` | `rgb(___, ___, ___)` | `success state` | `#______` | `AA / Fail` |
| `color.semantic.warning` | `#______` | `rgb(___, ___, ___)` | `warning state` | `#______` | `AA / Fail` |
| `color.semantic.error` | `#______` | `rgb(___, ___, ___)` | `error state` | `#______` | `AA / Fail` |
| `color.semantic.info` | `#______` | `rgb(___, ___, ___)` | `info state` | `#______` | `AA / Fail` |

## Typography

| Token | Value | Use |
|---|---|---|
| `typography.fontFamily.base` | `______` | `body text` |
| `typography.fontFamily.heading` | `______` | `titles` |
| `typography.fontSize.sm` | `______` | `caption` |
| `typography.fontSize.md` | `______` | `body` |
| `typography.fontSize.lg` | `______` | `subtitle` |
| `typography.fontSize.xl` | `______` | `title` |
| `typography.fontWeight.regular` | `______` | `normal text` |
| `typography.fontWeight.medium` | `______` | `emphasis` |
| `typography.fontWeight.bold` | `______` | `headline` |
| `typography.lineHeight.base` | `______` | `body line height` |

## Spacing / Radius / Shadow / Motion

### Spacing

`spacing.2`, `spacing.4`, `spacing.8`, `spacing.12`, `spacing.16`, `spacing.24`, `spacing.32`

### Radius

`radius.sm`, `radius.md`, `radius.lg`, `radius.full`

### Shadow

`shadow.sm`, `shadow.md`, `shadow.lg`

### Motion

| Token | Value | Use |
|---|---|---|
| `motion.duration.fast` | `______` | `hover/focus` |
| `motion.duration.normal` | `______` | `enter/exit` |
| `motion.easing.standard` | `______` | `default transition` |

## Breakpoints

| Token | Value |
|---|---|
| `breakpoint.sm` | `______` |
| `breakpoint.md` | `______` |
| `breakpoint.lg` | `______` |
| `breakpoint.xl` | `______` |

## Mapping Notes for AI Coding

- Use `primary` only for `CTA`, primary buttons, active navigation, and key highlights.
- Avoid misusing semantic colors outside semantic/state contexts.
- Prefer token references over hardcoded color values.
