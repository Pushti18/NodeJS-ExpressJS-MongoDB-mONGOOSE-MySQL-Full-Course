const express = require("express");

const app = express();

app.get("", (req, resp) => {
  console.log(req.query);
  if (req.query.name == "world") {
    resp.send("Hello World!");
  } else {
    resp.send("Hello " + req.query.name);
  }
});

app.get("/help", (req, resp) => {
  resp.send("HELP");
});

app.get("/about", (req, resp) => {
  resp.send("ABOUT");
});

app.listen(5000);
