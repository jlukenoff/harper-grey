import express from 'express';
import path from 'path';
import React from 'react';
import parser from 'body-parser';
import { renderToString } from 'react-dom/server';
import { renderStylesToString } from 'emotion-server';
import { StaticRouter } from 'react-router';
import { Contact as ContactModel } from '../database';
import App from '../client/Components/App/App';

const app = express();

app.use(express.static(path.resolve('./public')));

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.post('/api/contact', (req, res) => {
  const { name, city, message, email, ageRange } = req.body;
  new ContactModel({
    _id: Date.now(),
    name,
    city,
    message,
    email,
    age: ageRange,
  }).save(err => {
    if (err) {
      console.log(`error storing data ${err}`);
      res.statusCode = 400;
      res.end(`Error saving record to database ${err}`);
    } else {
      console.log('success');
      res.send();
    }
  });
});

app.get('/', (req, res) => {
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
