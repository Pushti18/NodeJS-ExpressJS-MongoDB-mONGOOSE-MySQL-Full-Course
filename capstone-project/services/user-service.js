class UserService{
    constructor(){
        this.userConfig = require('../config/user-config');
        this.userModel = require('../models/users')
        this.userDataModel = require('../models/user-data')
    }

    checkUserCredentials(email, password){

      

        if(email != this.userConfig.email){
            return {
                status: false,
                message: 'Email not verified!',
            }
        }
        else if(password != this.userConfig.password){
            return {
                status: false,
                message: 'Invalid Password!',
            }
        }
        else if(email === this.userConfig.email && password === this.userConfig.password){
            return {
                status: true,
                message: 'User varified'
            }
        }
        else
        {
            return {
                status: false,
                message: 'Invalid Credentials'
            }
        }
    }

    async createUser(userData){
        try{
           
            let queryResponse = await this.userModel.create(userData)

            return {
                status: true,
                data: queryResponse,
            }
        }
        catch(err)
        {
            console.log(err);
            return{
                status: false,
                message: 'Error in services',
            }
        }
    }

    async findUser(userEmail)
    {
        try{
            
            let user = await this.userModel.findOne({email: userEmail})
            
            return {
                status: true,
                data: user,
            }
        }
        catch(err){
            console.log(err);
            return{
                status: false,
                message: 'Error in services while finding user',
            }
        }
    }

    async getAllUsers()
    {
        try{
           
            let allUsers = await this.userModel.find().lean()

            return {
                status: true,
                data: allUsers,
            }
        }
        catch(err){
            console.log(err);
            return{
                status: false,
                message: 'Error in services while all user',
            }
        }
    }

    async deleteUser(userEmail)
    {
        try{
           
            let deleteUser = await this.userModel.findOneAndDelete({email: userEmail})

            return {
                status: true,
                data: userEmail
            }
        }
        catch(err){
            console.log(err);
            return{
                status: false,
                message: 'Error in services while delete user',
            }
        }
    }

    async updateUser(userData)
    {
        try{
            
           
            let updateUser = await this.userModel.findOneAndUpdate({email: userData.email},{
                $set: {
                    name: userData.name,
                    mobile_number: userData.mobile_number,
                    age: userData.age
                }
            },{new: true})

            return{
                status: true,
                data: updateUser,
            }

        }
        catch{
            console.log(err);
            return{
                status: false,
                message: 'Error in services while updating user',
            }
        }
    }

    async insertUserData(userData)
    {
        try{
            let userDataInserted = await this.userDataModel.create(userData)
            return{
                status: true,
                data: userDataInserted
            }
        }
        catch(err){
            console.log(err);
            return{
                status: false,
                message: 'Error in services while inserting user data',
            }
        }
    }

    async collectAllDataOfUser(userId)
    {
        try{
            let allDataOfUser = await this.userModel.aggregate([
                {
                    $match: {_id: userId}
                },
                {
                    $lookup: {
                        from: 'user-datas',
                        localField: '_id',
                        foreignField: 'user_id',
                        as: 'userData'
                    }
                },
                {
                    $project: {
                        name: 1,
                        email: 1,
                        
                        subject: '$userData.subject',
                        detail: '$userData.detail'
                    }
                }
            ])

            return{
                status: true,
                data: allDataOfUser,
            }
        }
        catch(err)
        {
            console.log(err);
            return{
                status: false,
                message: 'Error in services while collecting user data',
            }
        }
    }
}

module.exports = new UserService();

