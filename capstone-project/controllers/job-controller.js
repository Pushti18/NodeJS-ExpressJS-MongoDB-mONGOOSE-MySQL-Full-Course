// const { password } = require('../config/job-config')

class jobController{
    constructor(){
        this.es6BindAll = require('es6bindall')
        //this.es6BindAll(this, ['verifyjob'])
        this.jobservice = require('../services/job-service')
        this.mongoose = require('mongoose')
    }

    // async verifyjob(req, res){
    //     //Fetch the credentials from the request object
    //     let jobEmail = req.body.email         //req.params.variable, req.query.variable
    //     let jobPassword  = req.body.password
    //     //Pass that credentials inside service function
    //     let serviceResponse = await this.jobservice.checkjobCredentials(jobEmail,jobPassword) 
    //     console.log('ServiceResponse',serviceResponse)
    //     //Send the proper response to the job
    //     let resStatus = 200
    //     if(serviceResponse.status != true)
    //     {
    //         resStatus = 401;
    //     }
    //     res.status(resStatus).send(serviceResponse)
    // }

    async createJob(req, res)
    {
        try{
            let jobData = {
            
                admin: req.body.admin,
                name: req.body.name,
                experience: req.body.experience,
                salary: req.body.salary,
            }
            console.log("jobData", jobData);
            if(jobData.admin == "true")
            {

                let queryResponse = await this.jobservice.createjob(jobData);
                if(queryResponse.status)
                {
                    res.status(200).send({
                        status: true,
                        message: 'job Inserted',
                    })
                }
                else
                {
                    res.status(400).send({
                        status: false,
                        message: 'Error in inserting job',
                    })
                }
            }
            else
            {
                res.status(200).send({
                    status: true,
                    message: 'jnot admin',
                })
            }
        }
        catch(err){
            console.log(err);
            return{
                status: false,
                message: 'Error in controller',
            }
        }
    }

    async findJob(req, res){
        try{
      
            let findjob = await this.jobservice.findjob(req.body._id,req.body.name,req.body.experience,req.body.salary)

            if(findjob.status)
            {
                res.status(200).send({
                    status: true,
                    data: findjob,
                })
            }
            else
            {
                res.status(400).send({
                    status: false,
                    message: 'Error in finding job',
                })
            }
        }
        catch(err){
            console.log(err);
            return{
                status: false,
                message: 'Finding in job controller error',
            }
        }
    }

    async getJob(req, res)
    {
        try{
            let alljob = await this.jobservice.getAlljobs(req.body._id)
            if(alljob.status)
            {
                res.status(200).send({
                    status: true,
                    data: alljob,
                })
            }
            else
            {
                res.status(400).send({
                    status: false,
                    message: 'Error in collecting all job',
                })
            }
        }
        catch(err){
            console.log(err);
            return{
                status: false,
                message: 'error in controller while collecting all jobs',
            }
        }
    }

    async deleteJob(req, res)
    {
        try{
            
            let deletejob = await this.jobservice.deletejob(req.body.name)
            if(deletejob.status)
            {
                res.status(200).send({
                    status: true,
                    message: 'job deleting job',
               
                })
            }
            else
            {
                res.status(400).send({
                    status: false,
                    message: 'Error while deleting job',
                })
            }
        }
        catch(err){
            console.log(err);
            return{
                status: false,
                message: 'error in controller while deleting jobs',
            }
        }
    }

    async updateJob(req, res)
    {
        try{
           
           
            let updatejob = await this.jobservice.updatejob(req.body._id,req.body.name,req.body.experience,req.body.salary)
            if(updatejob.status)
            {
                res.status(200).send({
                    status: true,
                    data: updatejob,
                })
            }
            else
            {
                res.status(400).send({
                    status: false,
                    message: 'Error while updating job',
                })
            }
        }
        catch(err){
            console.log(err);
            return{
                status: false,
                message: 'error in controller while patching jobs',
            }
        }
    }

    

    async collectJobData(req, res)
    {
        try{
            let jobId = await this.mongoose.Types.ObjectId(req.params.id);
            let queryResponse = await this.jobservice.collectAllDataOfjob(jobId);
            if(queryResponse.status)
            {
                res.status(200).send({
                    status: true,
                    data: queryResponse.data,
                    message: 'job Data collected',
                })
            }
            else
            {
                res.status(400).send({
                    status: false,
                    message: 'Error in collecting job data',
                })
            }
        }
        catch(err)
        {
            console.log(err);
            return{
                status: false,
                message: 'error in controller while collecting job data',
            }
        }
    }
}

module.exports = new jobController();