# ItzFallenMe portfolio (Next.js + TSX)

## Local development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Content
- Edit portfolio content in `lib/site.ts` (bio, projects, experience, skills, achievements).
- Blog posts are in `lib/blog.ts`.
- Project detail routes are generated from the project list.
- The Wall is a browser-local demo; notes are not shared with other visitors.

## Contact form
By default, the contact form opens the visitor's email application with the message prefilled. To enable a hosted form endpoint, add `NEXT_PUBLIC_FORMSPREE_ENDPOINT` to the build environment (for example, a Formspree endpoint). The form will then submit to that endpoint and show status feedback. Configure the endpoint with the provider before deploying.

## RSS feed
Set `NEXT_PUBLIC_SITE_URL` to the canonical deployed URL at build time so the RSS feed emits correct absolute links.

## Discord presence
Discord presence uses Lanyard. Join the Lanyard Discord with the tracked account if the widget does not show presence.

## Deployment
This project uses Next.js static export (`output: "export"`). Static hosting is suitable for the portfolio pages, project/blog routes, and local Wall demo. Features requiring server-side processing should use a configured external service.
