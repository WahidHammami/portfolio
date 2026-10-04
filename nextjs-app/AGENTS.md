<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

The Next.js source is this `nextjs-app` directory. `index.html`, `style.css`, and `_next/` at the repository root are the committed GitHub Pages export.

- Install dependencies with `npm ci` here (Node.js >= 20.9). The environment install does this for `portfolio/nextjs-app` and `portfolio-website/nextjs-app`.
- Lint: `npm run lint`
- Production build, including TypeScript: `npm run build`
- The environment starts dev servers with `npm run dev -- --hostname 0.0.0.0 --port <port>`: `portfolio` on port 3000 and `portfolio-website` on port 3001.
- GitHub Pages export: `EXPORT=true npm run build` writes `out/` with `basePath` `/portfolio`.
