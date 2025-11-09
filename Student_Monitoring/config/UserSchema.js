const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username : String,
    email : String,
    password : String,
})

const Usermodel = mongoose.model('Student',UserSchema)

module.exports = Usermodel