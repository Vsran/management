const express = require('express');
const  createProxyMiddleware  = require('http-proxy-middleware');
//const app = express();

module.exports = function(app) {
    app.use(('/data',createProxyMiddleware({
        target: 'http://192.168.1.195:8000',
        changeOrigin: true,
        pathRewrite: {
            '^/data': ''
        }
    })))
}
//app.listen(3000);

