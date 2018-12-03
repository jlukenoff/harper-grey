import express from 'express';
import path from 'path';
import fs from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { renderStylesToString } from 'emotion-server';
import { StaticRouter } from 'react-router';
import App from '../client/Components/App/App';

const app = express();

app.use(express.static(path.resolve('./public')));

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.resolve('./public/bundle.js'));
});

app.get('/*', (req, res) => {
  const context = {};
  const markup = renderStylesToString(
    renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    )
  );
  if (context.url) {
    res.redirect(context.url);
  } else {
    res.send(`
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>SSR app</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
          </head>
          <body>
            <div id="app">${markup}</div>
            <script src="/bundle.js"></script>
          </body>
          </html>
        `);
  }
});

const port = process.env.PORT || 3000;

const server = app.listen(port, () =>
  console.log(`Server running on port ${port}`)
);

if (process.env.NODE_ENV === 'test') server.close();

module.exports = { server };
