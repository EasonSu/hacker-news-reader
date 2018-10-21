const ip = require('ip');
const express = require('express');

const setup = require('./middlewares/frontendMiddleware');
const { resolve } = require('path');
const app = express();

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

const host = process.env.HOST || null; // Let http.Server use its default IPv6/4 host
const prettyHost = host || 'localhost';
const port = parseInt(process.env.PORT || '3886', 10);

// Start server
app.listen(port, host, (err) => {
  if (err) {
    console.error(err.message); // eslint-disable-line no-console
    return;
  }

  const serverReadyInfo = `
Server started

Access URLs:
-----------------------------------
Localhost: http://${prettyHost}:${port}
      LAN: http://${ip.address()}:${port}
-----------------------------------

Press 'CTRL-C' to stop
  `;

  console.info(serverReadyInfo); // eslint-disable-line no-console
});
