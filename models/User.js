const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new Schema({
    username: String,
    email: String,
    dateCreated: Date,
    password: String
})

mongoose.model("User", userSchema)