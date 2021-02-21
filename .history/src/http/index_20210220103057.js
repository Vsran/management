const axios = require("axios");
const http = axios.create({
  baseURL: "http://192.168.1.195:8000",
  withCredentials: true
});

export default http;


