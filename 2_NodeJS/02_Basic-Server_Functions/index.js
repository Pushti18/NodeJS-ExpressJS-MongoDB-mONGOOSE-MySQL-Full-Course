const http = require("http");
const fs = require("fs");
http
  .createServer(function (_req, res) {
    const src = fs.createReadStream("./app.html");
    src.on("data", (data) => {
      if (!res.write(data)) {
        src.pause();
      }
    });

    src.on("drain", () => {
      src.resume();
    });

    src.on("end", () => {
      res.end();
    });
  })
  .listen(8080);
