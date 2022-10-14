const mongoose = require("mongoose")

var jobDataSchema = new mongoose.Schema({
    
    name: {
        type: String,
        default: ""
    },
    experience: {
        type: String,
        default: ""
    },
    salary: {
        type: String,
        default: "1"
    }
})

module.exports = mongoose.model("job-data", jobDataSchema)