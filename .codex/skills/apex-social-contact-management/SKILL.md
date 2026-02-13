---
name: apex-social-contact-management
description: Manage social links and commercial contact blocks in Apex Header and Footer, including FontAwesome icons, external URLs, and supporting CTA copy. Use when requests involve Instagram, Facebook, TikTok, WhatsApp, brand links, or social contact updates without redesigning architecture.
---

# Apex Social Contact Management

## Objective

Update social and contact channels while keeping visual and functional consistency.

## Run this workflow

1. Locate social link blocks in `Header` and `Footer`.
2. Edit URLs and CTA copy without changing layout structure unless requested.
3. Keep explicit FontAwesome icon imports per icon.
4. Keep safe external link attributes (`target="_blank"` and `rel="noopener noreferrer"` when needed).
5. Verify logo, brand name, and links remain aligned with commercial goals.

## File map

- `src/Components/Header/Header.jsx`: primary social access links.
- `src/Components/Footer/Footer.jsx`: repeated social links and closing CTA.
- `src/Components/Navbar/Navbar.jsx`: brand and main link.

## Rules

- Do not mix social/contact edits with large style refactors.
- Keep copy short and conversion oriented.
- If an official URL is missing, add a short `TODO` with the pending channel.

## Output checklist

- Confirm all links open correct targets.
- Confirm there are no missing icon imports or broken links.
- Confirm Header/Footer consistency for each social channel.
