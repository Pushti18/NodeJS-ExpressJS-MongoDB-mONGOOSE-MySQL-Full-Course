class UserController {
  constructor() {
    this.es6BindAll = require("es6bindall");
    this.es6BindAll(this, ["verifyUser"]);
    this.userService = require("../services/user-service");
  }
  async verifyUser(req, res) {
    //fetch the credentials from the request object
    let userEmail = req.body.userEmail; //req.params.variablename, req.query.variable
    let userPassword = req.body.password;
    //pass credentials inside service function
    let serviceResponse = await this.userService.checkUserCredentials(
      userEmail,
      userPassword
    );
    console.log("serviceResponse", serviceResponse);
    //send proper response to user
    var resStatus = 200;
    if (serviceResponse.status != true) {
      resStatus = 401;
    }
    res.status(resStatus).send(serviceResponse);
  }
}
module.exports = new UserController();
