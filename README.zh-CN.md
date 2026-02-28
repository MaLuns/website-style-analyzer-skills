# 网站风格分析 Skill

中文 | [English](README.md)

该 skill 用于分析公开网站的视觉风格与可复用组件，并生成可直接用于 AI Coding 的结构化产物。

主要能力：
- 提取颜色、字体、间距、圆角、阴影、动效等设计 token
- 归纳组件样式规范（按钮、表单、卡片、导航、弹层等）
- 输出统一格式文件，便于后续开发复用

## 快速开始

1. 在 Codex 中输入：

```text
Install skill from https://github.com/MaLuns/website-style-analyzer-skills/tree/main/skills/website-style-analyzer
```

2. 重启 Codex。

## 调用 Skill

`target_url` 为必填，其他参数为可选。

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

## 输出文件

在 `output_dir`（默认 `./style-guide`）下会生成：
- `brand-tokens.md`
- `tokens.json`
- `page-inventory.md`
- `components/*.md`

## 手动安装（可选）

1. 将 `skills/website-style-analyzer` 复制到：
- `~/.codex/skills/website-style-analyzer`
- Windows：`%USERPROFILE%\\.codex\\skills\\website-style-analyzer`

2. 重启 Codex。
