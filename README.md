# Random Joke Generator

This small project provides a client-side Random Joke Generator (public/index.html) that fetches jokes from the external API https://icanhazdadjoke.com/.

It also includes an optional small Node/Express proxy (server.js) to avoid CORS issues or to hide client-side API calls.

Files included:

- public/index.html — client page that fetches jokes directly from the external API
- server.js — optional Express proxy that exposes GET /api/joke
- package.json — scripts and dependencies

Quick start (with proxy)

1. npm install
2. npm start
3. Open http://localhost:3000/ (index.html is served from /public)

Quick start (client-only)

1. Serve public/index.html from any static server (python -m http.server) and open it in the browser.

Notes

- The client fetches jokes from icanhazdadjoke.com which supports JSON responses. If you plan to deploy to Vercel or another platform, use the proxy route (/api/joke) to avoid CORS or to centralize API usage.

