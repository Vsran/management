const axios = require("axios");
const http = axios.create({
  baseURL: "http://192.168.1.195:8000",
  withCredentials: true,
  'Access-Control-Allow-Origin': '*',
  proxy: {
      protocol: 'http',
      host: '127.0.0.1',
      port: 1337
  }
});
const 
export default http;


