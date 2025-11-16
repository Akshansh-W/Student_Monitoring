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

app.use(exp.static("public"));


app.get("/", (req, res) => {
    res.render("landing");  
});

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        //Check in USER model
        const user = await Usermodel.findOne({ email: email, password: password });

        if (user) {
            return res.render('user'); 
        }

        // Check in ADMIN model
        const admin = await Adminmodel.findOne({ email: email, password: password });

        if (admin) {
            console.log("Admin logged in:", admin.username);
            return res.render('admin'); 
        }

        // 3️⃣ No match in both tables
        return res.send("❌ User not found !!");

    } catch (err) {
        console.log(err);
        res.status(500).send("Server error");
    }
});

app.post('/user',(req,res)=>{
    res.render('User')
})

app.post('/admin',(req,res)=>{
    res.render('Admin')
})


app.listen(3000,()=>{
    console.log("Server Started at local host 3000")
})