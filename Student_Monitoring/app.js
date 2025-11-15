const exp = require('express')
const app = exp()
const connect = require('./config/db_connect')
const Usermodel = require('./config/UserSchema')
const Adminmodel = require('./config/AdminSchema')
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(exp.json())
app.use(exp.urlencoded( {extended : true}))


app.get("/", (req, res) => {
    res.render("landing");  
});

app.get('/login',(req,res)=>{
    res.render('login')
})

app.get('/student_signin',(req,res)=>{
    res.render('SignIn')
})

app.get('/admin_signin',(req,res)=>{
    res.render('SignIn')
})

app.post('/user',(req,res)=>{
    res.render('User')
})

app.post('/admin',(req,res)=>{
    res.render('Admin')
})


app.listen(3000,()=>{
    console.log("Server Started at local host 3000")
})