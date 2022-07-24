class IndexRoute {
  constructor() {
    this.router = require("express").Router();
    this.weatherController = require("../controllers/weather-controller");
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
      this.weatherController.getWeatherDetails.bind(this.weatherController)
    );

    this.router.post(
      "/verify-user",
      this.userController.verifyUser.bind(this.userController)
    );

    this.router.post(
      "/create-user",
      this.userController.createUser.bind(this.userController)
    );

    this.router.get(
      "/find-user/email",
      this.userController.findUser.bind(this.userController)
    );

    this.router.get(
      "/all-users",
      this.userController.getuser.bind(this.userController)
    );

    this.router.delete(
      "/delete-users",
      this.userController.deleteUser.bind(this.userController)
    );

    this.router.patch(
      "/update-user",
      this.userController.updateUser.bind(this.userController)
    );
  }
}

const router = new IndexRoute();
module.exports = router.router;
