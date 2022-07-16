class IndexRoute {
  constructor() {
    this.router = require("express").Router();

    this.setRoutes();
  }

  setRoutes() {
    this.router.get("/", (req, res) => {
      res.status(200).send({
        status: true,
        message: "I got the response",
      });
    });
  }
}

const router = new IndexRoute();
module.exports = router.router;
