const exp = require('express')
const app = exp()
const connect = require('./config/db_connect')
const Usermodel = require('./config/UserSchema')
const Adminmodel = require('./config/AdminSchema')
const path = require("path");
const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(exp.json())
app.use(exp.urlencoded( {extended : true}))

app.use(exp.static("public"));


app.get("/", (req, res) => {
    res.render("landing");  
});



app.use('/user', userRouter);

app.use('/admin', adminRouter);



app.listen(3000,()=>{
    console.log("Server Started at local host 3000")
})