class UserService {
  constructor() {
    this.userConfig = require("../config/user-config");
    this.userModel = require("../models/users");
    this.userDataModel = require("../models/user-data");
  }

  checkUserCredentials(email, password) {
    //create database query and check from daatabase

    if (email != this.userConfig.email) {
      return {
        status: false,
        message: "Email not verified!",
      };
    } else if (password != this.userConfig.password) {
      return {
        status: false,
        message: "Invalid Password!",
      };
    } else if (
      email === this.userConfig.email &&
      password === this.userConfig.password
    ) {
      return {
        status: true,
        message: "User varified",
      };
    } else {
      return {
        status: false,
        message: "Invalid Credentials",
      };
    }
  }

  async createUser(userData) {
    try {
      //Save Method
      // let userObj = new this.userModel(userData)
      // let queryResponse = await userObj.save()

      //Create
      let queryResponse = await this.userModel.create(userData);

      return {
        status: true,
        data: queryResponse,
      };
    } catch (err) {
      console.log(err);
      return {
        status: false,
        message: "Error in services",
      };
    }
  }

  async findUser(userEmail) {
    try {
      //findOne function -> return singe document (if user exists) else it return null (if user not found)

      let user = await this.userModel.findOne({ email: userEmail });
      // user["dob"] = new Date()
      //find function -> return array of object (multiple document) else it will return [] (if no data found)

      //.lean() -> Convert mongodb object document to plain javascript document

      return {
        status: true,
        data: user,
      };
    } catch (err) {
      console.log(err);
      return {
        status: false,
        message: "Error in services while finding user",
      };
    }
  }

  async getAllUsers() {
    try {
      //find method
      let allUsers = await this.userModel.find().lean();

      //agregate function

      return {
        status: true,
        data: allUsers,
      };
    } catch (err) {
      console.log(err);
      return {
        status: false,
        message: "Error in services while all user",
      };
    }
  }

  async deleteUser(userEmail) {
    try {
      //findOneAndDelete -> delete single document from database , response -> deleted user data
      let deleteUser = await this.userModel.findOneAndDelete({
        email: userEmail,
      });

      //deleteMany -> It will delete multiple document

      return {
        status: true,
        data: userEmail,
      };
    } catch (err) {
      console.log(err);
      return {
        status: false,
        message: "Error in services while delete user",
      };
    }
  }

  async updateUser(userData) {
    try {
      //findOneAndUpdate -> return old data of user. {options -> (new:true)}, parameters 1.query(match) ,2. the data/fields to update
      let updateUser = await this.userModel.findOneAndUpdate(
        { email: userData.email },
        {
          $set: {
            name: userData.name,
            mobile_number: userData.mobile_number,
            age: userData.age,
          },
        },
        { new: true }
      );

      return {
        status: true,
        data: updateUser,
      };

      //updateOne -> update only single document. Similar to findOneAndUpdate method
      //updateMany -> it will update multiple data.
    } catch {
      console.log(err);
      return {
        status: false,
        message: "Error in services while updating user",
      };
    }
  }

  async insertUserData(userData) {
    try {
      let userDataInserted = await this.userDataModel.create(userData);
      return {
        status: true,
        data: userDataInserted,
      };
    } catch (err) {
      console.log(err);
      return {
        status: false,
        message: "Error in services while inserting user data",
      };
    }
  }

  async collectAllDataOfUser(userId) {
    try {
      let allDataOfUser = await this.userModel.aggregate([
        {
          $match: { _id: userId },
        },
        {
          $lookup: {
            from: "user-datas",
            localField: "_id",
            foreignField: "user_id",
            as: "userData",
          },
        },
        {
          $project: {
            name: 1,
            email: 1,
            mobile_number: 1,
            age: 1,
            subject: "$userData.subject",
            detail: "$userData.detail",
          },
        },
      ]);

      return {
        status: true,
        data: allDataOfUser,
      };
    } catch (err) {
      console.log(err);
      return {
        status: false,
        message: "Error in services while collecting user data",
      };
    }
  }
}

module.exports = new UserService();
