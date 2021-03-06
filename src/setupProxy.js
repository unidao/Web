const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/subgraphs",
    createProxyMiddleware({
      target: "https://api.thegraph.com",
      changeOrigin: true,
    })
  );

  app.use(
    "/storage",
    createProxyMiddleware({
      target: "https://charts.berezka.io",
      changeOrigin: true,
    })
  );
};
