const mongoose = require("mongoose");

var userDataSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: "users",
  },
  id_card: {
    type: String,
    default: "",
  },
  roll_number: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("user-data", userDataSchema);
