const http = require("http"); // Or you could use HTTPS
const httpserv = require("algo-httpserv"); // or "./httpserv" if you downloaded the source
const server = http.createServer(httpserv.serve);
server.listen(1111);
console.log("server running on port 1111...");
