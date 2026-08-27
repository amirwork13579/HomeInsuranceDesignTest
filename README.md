# Home Insurance Design Test

A responsive, from-scratch React recreation of the public
[Home Claims Assist](https://www.homeclaimsassist.co.uk/) website. It includes
the public marketing pages, consultation workflow, and an authenticated claims
administration area.

## Included

- 18 responsive public routes covering audiences, claim types, partners, process, blog, and contact content
- full-screen video hero, responsive navigation, interactive service cards, and consultation forms
- working video dialog
- D1-backed enquiry storage with server-side validation
- ChatGPT-authenticated admin dashboard with search, filtering, record details, status management, private notes, and activity history
- mobile, tablet, reduced-motion, keyboard, and focus states

## Run locally

```bash
npm install
cp .dev.vars.example .dev.vars
npm run dev
```

Replace `owner@example.com` in `.dev.vars` with the ChatGPT email that should
have administrator access. Multiple administrators can be separated with
commas. The hosted environment must define the same `ADMIN_EMAILS` value.

For a production build:

```bash
npm run build
```

The consultation forms submit to `/api/enquiries` and store validated records
in D1. The admin workspace is available at `/admin/enquiries` and fails closed
when no administrator allowlist is configured.

## Reference assets

This design-test build loads the reference site's public logo, photography,
hero video, and testimonial thumbnail by URL. Replace those URLs with owned,
licensed assets before using the project as an independent production site.
