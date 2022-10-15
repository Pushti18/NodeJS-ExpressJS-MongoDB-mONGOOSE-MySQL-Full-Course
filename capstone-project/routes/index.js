class IndexRoute{ 
    constructor(){ 
        this.router = require("express").Router()
        this.weatherController = require('../controllers/weather-controller')
        this.userController = require('../controllers/user-controller');
        this.jobController = require('../controllers/job-controller');
        this.setRoutes()
    } 
 
    setRoutes(){ 
        this.router.get('/', (req, res) => { 
            res.status(200).send({ 
                status: true, 
                message: "I got the response",
            }) 
        })
        
        this.router.post('/verify-user',this.userController.verifyUser.bind(this.userController))  

        this.router.post('/create-user',this.userController.createUser.bind(this.userController))  

        this.router.get('/find-user',this.userController.findUser.bind(this.userController)) 

        this.router.get('/all-users',this.userController.getuser.bind(this.userController))

        this.router.delete('/delete-user',this.userController.deleteUser.bind(this.userController))   

        this.router.patch('/update-user',this.userController.updateUser.bind(this.userController)) 

       
        this.router.post('/insert-user-note',this.userController.insertUserData.bind(this.userController)) 

        this.router.get('/collect-user-note/:id',this.userController.collectUserData.bind(this.userController))    

        //job
      

        this.router.post('/create-job',this.jobController.createJob.bind(this.jobController))  

        this.router.get('/find-job',this.jobController.findJob.bind(this.jobController)) 

         this.router.get('/all-jobs',this.jobController.getJob.bind(this.jobController))

        this.router.delete('/delete-job',this.jobController.deleteJob.bind(this.jobController))   

        this.router.patch('/update-job',this.jobController.updateJob.bind(this.jobController)) 

    } 
} 

const router = new IndexRoute();
module.exports = router.router;