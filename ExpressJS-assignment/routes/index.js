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

    this.router.post(
      "/verify-user",
      this.userController.verifyUser.bind(this.userController)
    ); //done

    this.router.post(
      "/create-user",
      this.userController.createUser.bind(this.userController)
    ); //done

    this.router.get(
      "/find-user",
      this.userController.findUser.bind(this.userController)
    ); //done

    this.router.get(
      "/all-users",
      this.userController.getuser.bind(this.userController)
    ); //no-need code

    this.router.delete(
      "/delete-users",
      this.userController.deleteUser.bind(this.userController)
    ); //done

    this.router.patch(
      "/update-user",
      this.userController.updateUser.bind(this.userController)
    ); //done

    //Api to insert-data in user data collection
    this.router.post(
      "/insert-user-note",
      this.userController.insertUserData.bind(this.userController)
    ); //done

    this.router.get(
      "/collect-user-note/:id",
      this.userController.collectUserData.bind(this.userController)
    ); //done
  }
}

const router = new IndexRoute();
module.exports = router.router;
