const  createProxyMiddleware  = require('http-proxy-middleware');
module.exports = function(app) {
    app.use('/backend/login/',createProxyMiddleware({
        target: 'http://192.168.1.195:8000',
        changeOrigin: true
    }))
}

