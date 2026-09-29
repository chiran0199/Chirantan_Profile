import { createServer } from 'vite';
import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';
import { writeFileSync } from 'node:fs';
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx');
  writeFileSync('reference/rendered.html', renderToStaticMarkup(createElement(App)));
  console.log('React server render passed.');
} finally { await server.close(); }
