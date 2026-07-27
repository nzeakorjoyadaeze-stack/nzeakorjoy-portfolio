// Simple Express proxy to fetch jokes server-side to avoid CORS or to hide API calls.
// Usage: node server.js
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public')); // serve index.html from ./public if you put client there

app.get('/api/joke', async (req, res) => {
  try {
    const resp = await axios.get('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json', 'User-Agent': 'Random-Joke-Generator/1.0' },
      timeout: 5000
    });
    res.json(resp.data);
  } catch (err) {
    res.status(502).json({ error: 'Failed fetching joke', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
