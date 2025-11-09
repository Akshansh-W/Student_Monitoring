const exp = require('express')
const app = exp()
const connect = require('./config/db_connect')
const Usermodel = require('./config/UserSchema')
app.set('view engine','ejs')
app.use(exp.json())
app.use(exp.urlencoded( {extended : true}))


app.get("/",(req,res)=>{
    res.render("./views/landing")
})

app.get('/login',(req,res)=>{
    res.render('./views/login')
})

app.get('/sigin',(req,res)=>{
    res.render('./views/SignIn')
})

app.post('/user',(req,res)=>{
    res.render('./views/User')
})

app.post('/admin',(req,res)=>{
    res.render('./views/Admin')
})

















app.listen(3000,()=>{
    console.log("Server Started at local host 3000")
})