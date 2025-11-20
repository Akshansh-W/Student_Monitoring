const exp = require('expreess');
const Adminmodel = require('../config/AdminSchema');
const router = exp.Router();


// GET: Student Sign-In Page
router.get('/admin_signin', (req, res) => {
    res.render('SignIn');
});

// POST: Create Admin Account
router.post('/admin_signin', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        await Adminmodel.create({
            username,
            email,
            password
        });

        res.render('Admin');   // success page render

    } catch (err) {
        console.error(err);
        res.status(500).send("Error creating Account");
    }
});

// GET: Admin login Page
router.get('/admin_login', (req, res) => {
    res.render('login');
});


app.post('/admin_login', async (req, res) => {
    const { email, password } = req.body;

    try {
        //Check in Admin model
        const user = await Adminmodel.findOne({ email: email, password: password });

        if (user) {
            return res.render('Admin'); 
        }
        
        // No match 
        return res.send("❌ User not found !!");

    } catch (err) {
        console.log(err);
        res.status(500).send("Server error");
    }
});


module.exports = router;