const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
    username : String,
    email : String,
    password : String,
});

const Adminmodel = mongoose.model('Admin',AdminSchema)

module.exports = Adminmodel