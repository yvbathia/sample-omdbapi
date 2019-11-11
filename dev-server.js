const { createServer } = require('http');
const next = require('next');
const routes = require('./routes');

const app = next({ dev: true });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handler).listen(3000, (err) => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log(`> Ready on http://localhost:3000`);
  });
});
