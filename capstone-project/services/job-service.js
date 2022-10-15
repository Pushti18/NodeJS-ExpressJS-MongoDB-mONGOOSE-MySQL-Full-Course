class jobService{
    constructor(){
        this.jobModel = require('../models/job-data')
    
    }

    checkjobCredentials(email, password){

      

        if(email != this.jobConfig.email){
            return {
                status: false,
                message: 'Email not verified!',
            }
        }
        else if(password != this.jobConfig.password){
            return {
                status: false,
                message: 'Invalid Password!',
            }
        }
        else if(email === this.jobConfig.email && password === this.jobConfig.password){
            return {
                status: true,
                message: 'job varified'
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

    async createjob(jobData){
        try{
           
            let queryResponse = await this.jobModel.create(jobData)

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

    async findjob(_id)
    {
        try{
            

            let job = await this.jobModel.findOne({_id:_id})
          
            return {
                status: true,
                data: job,
                // message: "inseeted correctly"
            }
        }
        catch(err){
            console.log(err);
            return{
                status: false,
                message: 'Error in services while finding job',
            }
        }
    }

    async getAlljobs()
    {
        try{
          
            let alljobs = await this.jobModel.find().lean()

            return {
                status: true,
                data: alljobs,
            }
        }
        catch(err){
            console.log(err);
            return{
                status: false,
                message: 'Error in services while all job',
            }
        }
    }

    async deletejob(name)
    {
        try{
          
            let deletejob = await this.jobModel.findOneAndDelete({_name: name})

            return {
                status: true,
                data: deletejob
            }
        }
        catch(err){
            console.log(err);
            return{
                status: false,
                message: 'Error in services while delete job',
            }
        }
    }

    async updatejob(jobData)
    {
        try{
            
            
            let updatejob = await this.jobModel.findOneAndUpdate({_id:jobData._id},{
                $set: {
                    name: jobData.name,
              
                    experience: jobData.experience,
                    salary: jobData.salary
                }
            },{new: true})

            return{
                status: true,
                data: updatejob,
            }

        }
        catch{
            console.log(err);
            return{
                status: false,
                message: 'Error in services while updating job',
            }
        }
    }

    async insertjobData(jobData)
    {
        try{
            let jobDataInserted = await this.jobDataModel.create(jobData)
            return{
                status: true,
                data: jobDataInserted
            }
        }
        catch(err){
            console.log(err);
            return{
                status: false,
                message: 'Error in services while inserting job data',
            }
        }
    }

    async collectAllDataOfjob(jobId)
    {
        try{
            let allDataOfjob = await this.jobModel.aggregate([
                {
                    $match: {_id: jobId}
                },
                {
                    $lookup: {
                        from: 'job-datas',
                        localField: '_id',
                        foreignField: 'job_id',
                        as: 'jobData'
                    }
                },
                {
                    $project: {
                        name: 1,
                        email: 1,
                       
                        subject: '$jobData.subject',
                        detail: '$jobData.detail'
                    }
                }
            ])

            return{
                status: true,
                data: allDataOfjob,
            }
        }
        catch(err)
        {
            console.log(err);
            return{
                status: false,
                message: 'Error in services while collecting job data',
            }
        }
    }
}

module.exports = new jobService();

