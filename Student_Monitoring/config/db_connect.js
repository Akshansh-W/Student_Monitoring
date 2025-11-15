const mongoose = require('mongoose')
const connect = mongoose.connect('mongodb://localhost:27017/Student_Monitor').then(()=>{
    console.log('Connected To local Database !!')
})

module.exports = connect