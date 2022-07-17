class indexRoute {
  constructor() {
    this.router = require("express").Router();
    this.weathercontroller = require("../controllers/weather-controller");
    this.userController = require("../controllers/user-controller");
    this.setRoutes();
  }

  setRoutes() {
    this.router.get("/", (req, res) => {
      res.status(200).send({
        status: true,
        message: "I got the response",
      });
    });

    this.router.get(
      "/get-weather",
      this.weathercontroller.getWeatherDetails.bind(this.weathercontroller)
    );
    this.router.post(
      "/verify-user",
      this.userController.verifyUser.bind(this.userController)
    );
  }
}
const router = new indexRoute();
module.exports = router.router;
