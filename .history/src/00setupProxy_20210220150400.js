const express = require('express');
const  createProxyMiddleware  = require('http-proxy-middleware');
//const app = express();

module.exports = function(app) {
    app.use((createProxyMiddleware('/data',{
        target: 'http://192.168.1.195:8000',
        changeOrigin: true,
        pathRewrite: {
            '^/data': ''
        }
    })))
    app.use((createProxyMiddleware('/main',{
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
            '^/main': ''
        }
    })))
}
//app.listen(3000);

