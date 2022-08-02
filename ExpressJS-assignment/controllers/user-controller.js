const { password } = require("../config/user-config");

class UserController {
  constructor() {
    this.es6BindAll = require("es6bindall");
    this.es6BindAll(this, ["verifyUser"]);
    this.userservice = require("../services/user-service");
    this.mongoose = require("mongoose");
  }

  async verifyUser(req, res) {
    //Fetch the credentials from the request object
    let userEmail = req.body.email; //req.params.variable, req.query.variable
    let userPassword = req.body.password;
    //Pass that credentials inside service function
    let serviceResponse = await this.userservice.checkUserCredentials(
      userEmail,
      userPassword
    );
    console.log("ServiceResponse", serviceResponse);
    //Send the proper response to the user
    let resStatus = 200;
    if (serviceResponse.status != true) {
      resStatus = 401;
    }
    res.status(resStatus).send(serviceResponse);
  }

  async createUser(req, res) {
    try {
      let userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        mobile_number: req.body.mobile_number,
        age: req.body.age,
      };
      console.log("userData", userData);
      let queryResponse = await this.userservice.createUser(userData);
      if (queryResponse.status) {
        res.status(200).send({
          status: true,
          message: "User Inserted",
        });
      } else {
        res.status(400).send({
          status: false,
          message: "Error in inserting user",
        });
      }
    } catch (err) {
      console.log(err);
      return {
        status: false,
        message: "Error in controller",
      };
    }
  }

  async findUser(req, res) {
    try {
      let email = req.params.email;
      let findUser = await this.userservice.findUser(email);
      if (findUser.status) {
        res.status(200).send({
          status: true,
          data: findUser.data,
        });
      } else {
        res.status(400).send({
          status: false,
          message: "Error in inserting user",
        });
      }
    } catch (err) {
      console.log(err);
      return {
        status: false,
        message: "Finding in user controller error",
      };
    }
  }

  async getuser(req, res) {
    try {
      let allUser = await this.userService.getAllUsers();
      if (allUser.status) {
        res.status(200).send({
          status: true,
          data: allUser.data,
        });
      } else {
        res.status(400).send({
          status: false,
          message: "Error in collecting all user",
        });
      }
    } catch (err) {
      console.log(err);
      return {
        status: false,
        message: "error in controller while collecting all users",
      };
    }
  }

  async deleteUser(req, res) {
    try {
      let userEmail = req.body.email;
      let deleteUser = await this.userservice.deleteUser(userEmail);
      if (deleteUser.status) {
        res.status(200).send({
          status: true,
          data: deleteUser.data,
        });
      } else {
        res.status(400).send({
          status: false,
          message: "Error while deleting user",
        });
      }
    } catch (err) {
      console.log(err);
      return {
        status: false,
        message: "error in controller while deleting users",
      };
    }
  }

  async updateUser(req, res) {
    try {
      // let updateUser = req.body.email
      let updateUser = await this.userservice.updateUser(req.body);
      if (updateUser.status) {
        res.status(200).send({
          status: true,
          data: updateUser.data,
        });
      } else {
        res.status(400).send({
          status: false,
          message: "Error while updating user",
        });
      }
    } catch (err) {
      console.log(err);
      return {
        status: false,
        message: "error in controller while patching users",
      };
    }
  }

  async insertUserData(req, res) {
    try {
      let userData = {
        user_id: this.mongoose.Types.ObjectId(req.body.user_id),
        id_card: req.body.id_card,
        roll_number: req.body.roll_number,
      };
      console.log("userData", userData);
      let queryResponse = await this.userservice.insertUserData(userData);
      if (queryResponse.status) {
        res.status(200).send({
          status: true,
          message: "User Data Inserted",
        });
      } else {
        res.status(400).send({
          status: false,
          message: "Error in inserting user data",
        });
      }
    } catch (err) {
      console.log(err);
      return {
        status: false,
        message: "error in controller while inserting user data",
      };
    }
  }

  async collectUserData(req, res) {
    try {
      let userId = await this.mongoose.Types.ObjectId(req.params.id);
      let queryResponse = await this.userservice.collectAllDataOfUser(userId);
      if (queryResponse.status) {
        res.status(200).send({
          status: true,
          data: queryResponse.data,
          message: "User Data collected",
        });
      } else {
        res.status(400).send({
          status: false,
          message: "Error in collecting user data",
        });
      }
    } catch (err) {
      console.log(err);
      return {
        status: false,
        message: "error in controller while collecting user data",
      };
    }
  }
}

module.exports = new UserController();
