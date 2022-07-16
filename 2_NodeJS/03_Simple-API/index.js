const http = require("http"); // Handles REQUEST and RESPONSE in node.js
// const info = require('./export-import');

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "appliactionjson" });
    response.write(JSON.stringify(info.information));
    response.end();
  })
  .listen(5000);
