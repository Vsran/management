const axios = require("axios");
//const http = axios.create({
//  baseURL: "http://192.168.1.195:8000",
//  withCredentials: true,
//  'Access-Control-Allow-Origin': '*',
//  proxy: {
//      protocol: 'http',
//      host: '127.0.0.1',
//      port: 1337
//  }
//});
const CORSURL = {
    key: "http://localhost:1337",
    proxy: "http://192.168.1.195:8000"
}
const http = axios.create({
    baseURL:  "http://localhost:1337/trade/reward/isOpen?VSCODE_CORS=" +
    JSON.stringify(VSCODE_CORS_URL)
})
export default http;


