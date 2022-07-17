class UserService {
  constructor() {
    this.userConfig = require("../config/user-config");
  }

  checkUserCredentials(email, password) {
    if (email !== this.userConfig.email) {
      return {
        status: false,
        message: "email not verified",
      };
    } else if (password !== this.userConfig.password) {
      return {
        status: false,
        message: "password invalid",
      };
    } else if (
      email == this.userConfig.email &&
      password !== this.userConfig.password
    ) {
      return {
        status: true,
        message: "user verified",
      };
    } else {
      return {
        status: true,
        message: "invalid credential",
      };
    }
  }
}
module.exports = new UserService();
