class IndexRoute {
  constructor() {
    this.route = require("express").Router();

    this.setRoutes();
  }

  setRoutes() {
    this.Router.get("/", (req, res) => {
      res.status(200).send({
        status: true,
        message: "I got the response",
      });
    });
  }
}

const router = new IndexRoute();
module.exports = router.router;
