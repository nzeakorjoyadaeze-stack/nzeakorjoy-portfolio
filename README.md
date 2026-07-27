# Portfolio (Next.js + Contentlayer)

This branch scaffolds a minimal Next.js App Router site that uses Contentlayer for project content.

Local dev

1. npm install
2. npx contentlayer build
3. npm run dev

Notes
- Content files live in content/projects/*.mdx
- To publish, merge the branch and deploy to Vercel; ensure the build runs `npx contentlayer build && next build` if you need the contentlayer step.
