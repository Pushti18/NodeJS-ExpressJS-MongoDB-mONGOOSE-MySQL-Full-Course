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
        
        this.router.post('/verify-user',this.userController.verifyUser.bind(this.userController))   //done

        this.router.post('/create-user',this.userController.createUser.bind(this.userController))   //done

        this.router.get('/find-user',this.userController.findUser.bind(this.userController))  //done

        this.router.get('/all-users',this.userController.getuser.bind(this.userController)) //no-need code

        this.router.delete('/delete-user',this.userController.deleteUser.bind(this.userController))    //done

        this.router.patch('/update-user',this.userController.updateUser.bind(this.userController))  //done

        //Api to insert-data in user data collection
        this.router.post('/insert-user-note',this.userController.insertUserData.bind(this.userController))  //done

        this.router.get('/collect-user-note/:id',this.userController.collectUserData.bind(this.userController))     //done

        //job
        //this.router.post('/verify-job',this.userController.verifyjob.bind(this.jobController))   //done

        this.router.post('/create-job',this.jobController.createJob.bind(this.jobController))   //done

        this.router.get('/find-job',this.jobController.findJob.bind(this.jobController))  //done

         this.router.get('/all-job',this.jobController.getJob.bind(this.jobController)) //no-need code

        this.router.delete('/delete-job',this.jobController.deleteJob.bind(this.jobController))    //done

        this.router.patch('/update-job',this.jobController.updateJob.bind(this.jobController))  //done

        //Api to insert-data in job data collection
        // this.router.post('/insert-job-note',this.jobController.insertjobData.bind(this.jobController))  //done

        // this.router.get('/collect-job-note/:id',this.jobController.collectjobData.bind(this.jobController))     //done
    } 
} 

const router = new IndexRoute();
module.exports = router.router;