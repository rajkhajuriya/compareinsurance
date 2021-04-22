  
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/Leads',
    createProxyMiddleware({
      target: 'https://www.zohoapis.in/crm/v2',
      changeOrigin: true,
    })
  );
  
};
