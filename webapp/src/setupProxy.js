const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/orders',
    createProxyMiddleware({
      target: 'http://127.0.0.1:5001',
      changeOrigin: true,
    })
  );
  app.use(
    '/api/products',
    createProxyMiddleware({
      target: 'http://127.0.0.1:5003',
      changeOrigin: true,
    })
  );
};