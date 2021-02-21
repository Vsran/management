const axios = require("axios");
const http = axios.create({
  baseURL: "http://192.168.1.195:8000",
});

http.post("/data/login/?next=/", {
  username: "admin",
  password: "admin",
  next: "/",
}).then(function(response) {
    console.log('response', response);
})
