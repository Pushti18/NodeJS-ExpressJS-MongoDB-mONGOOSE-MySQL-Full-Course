const mongoose = require("mongoose")

var userDataSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: 'users'
    },
    subject: {
        type: String,
        default: ""
    },
    detail: {
        type: String,
        default: ""
    }
})

module.exports = mongoose.model("user-data", userDataSchema)