const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    pincode: {type: Number, required: true},
    gender: {type: Number, required: true},
    age: {type: Number, required: true}
});

const userSchema = mongoose.model("user", userSchema);

module.exports = userSchema;