const nextRoutes = require('next-routes');
const routePaths = require('./handlers/route-paths');

const routes = nextRoutes();

routePaths.forEach((routePath) => {
  routes.add(routePath.path, routePath.page);
});

module.exports = routes;
module.exports.Link = routes.Link;
module.exports.Router = routes.Router;
