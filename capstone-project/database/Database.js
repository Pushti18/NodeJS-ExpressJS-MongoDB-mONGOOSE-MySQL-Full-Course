class Database{
    constructor(){
        this.mongoose = require('mongoose')
        this.connect()
    }

    connect(){
       
        this.mongoose.connect(process.env.MONGO_CONNSTR, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        .then(() => {
            console.log('-----------Database Connected-----------')
        })

        .catch((err) => {
            console.log(err);
            console.log('-----------Unable To Connect-----------')
        })
    }
}

module.exports = new Database()