# Common Component Style Template

This file defines the shared structure and style configuration fields for component documents.

Write actual component documents to:

`components/{component-name}.md`

Goals:

- Keep component documentation structure consistent
- Focus on style fields that are directly implementable
- Avoid format drift across component files

---

## Required Sections for Each Component File

Each `components/{component-name}.md` must follow the section order below.

### 1) Metadata

- Component name
- Priority (`P0` / `P1` / `custom`)
- Status (`draft` / `final`)
- Related pages (brief list)
- Variant list

### 2) Style Token Mapping

List all token mappings used by this component.

| Category | Token | Purpose |
|---|---|---|
| Color | `______` | `______` |
| Typography | `______` | `______` |
| Spacing | `______` | `______` |
| Radius | `______` | `______` |
| Shadow | `______` | `______` |
| Motion | `______` | `______` |
| Border | `______` | `______` |

### 3) Base Style Configuration

Define default styles first, then layer states and variants.

| Property | Value / Token | Notes |
|---|---|---|
| background | `______` | `______` |
| color | `______` | `______` |
| border-color | `______` | `______` |
| border-width | `______` | `______` |
| border-style | `______` | `______` |
| border-radius | `______` | `______` |
| box-shadow | `______` | `______` |
| opacity | `______` | `______` |
| font-family | `______` | `______` |
| font-size | `______` | `______` |
| font-weight | `______` | `______` |
| line-height | `______` | `______` |
| padding | `______` | `______` |
| gap | `______` | `______` |
| min-height | `______` | `______` |
| min-width | `______` | `______` |
| width/height rule | `______` | `auto | fixed | fluid` |

### 4) Variant Style Configuration

Record style differences for each variant.

| Variant | Changed Property | Value / Token | Notes |
|---|---|---|---|
| `primary` | `______` | `______` | `______` |
| `secondary` | `______` | `______` | `______` |
| `ghost` | `______` | `______` | `______` |

### 5) State Matrix

Fill states based on component applicability:
- Required for interactive components: `default`, `hover`, `focus`, `focus-visible`, `active`, `disabled`
- Add only when async/submit state exists: `loading`
- For non-interactive components or non-applicable states, write `N/A` and explain rationale in notes

| State | Background | Text | Border | Shadow | Opacity | Cursor | Notes |
|---|---|---|---|---|---|---|---|
| default | `______` | `______` | `______` | `______` | `______` | `______` | `______` |
| hover | `______` | `______` | `______` | `______` | `______` | `______` | `______` |
| focus | `______` | `______` | `______` | `______` | `______` | `______` | `______` |
| focus-visible | `______` | `______` | `______` | `______` | `______` | `______` | `______` |
| active | `______` | `______` | `______` | `______` | `______` | `______` | `______` |
| disabled | `______` | `______` | `______` | `______` | `______` | `______` | `______` |
| loading | `______` | `______` | `______` | `______` | `______` | `______` | `______` |

### 6) Motion Configuration

| Transition Property | Duration Token/Value | Easing Token/Value | Delay | Notes |
|---|---|---|---|---|
| `______` | `______` | `______` | `______` | `______` |

### 7) Responsive Style Overrides

| Breakpoint | Property | Value / Token | Reason |
|---|---|---|---|
| `sm` | `______` | `______` | `______` |
| `md` | `______` | `______` | `______` |
| `lg` | `______` | `______` | `______` |
| `xl` | `______` | `______` | `______` |

### 8) Style Constraints

Record style rules that must not be violated.

- Do not use hardcoded colors outside the token system
- Keep contrast and readability aligned with global tokens
- Keep spacing aligned with the spacing scale
- Keep radius and shadow aligned with defined visual hierarchy

### 9) Minimal Implementation Snippet

```html
<div class="{component-class}">...</div>
```

```css
.{component-class} {
  background: var(--component-bg-default);
  color: var(--component-text-default);
  border: 1px solid var(--component-border-default);
}
```

---

## Quality Checklist

Before changing component status to `final`, verify:

- [ ] All required sections are present
- [ ] Base style configuration is complete
- [ ] Variant table is complete
- [ ] State matrix covers all applicable states, and `N/A` rows include rationale
- [ ] Responsive overrides are recorded (or explicitly marked not needed)
- [ ] Style values use token references whenever possible
