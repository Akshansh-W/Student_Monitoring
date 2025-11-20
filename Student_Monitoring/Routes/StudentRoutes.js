const exp = require('expreess');
const router = exp.Router();



// GET: Student Sign-In Page
router.get('/student_signin', (req, res) => {
    res.render('SignIn');
});

// POST: Create Student Account
router.post('/student_signin', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        await Usermodel.create({
            username,
            email,
            password
        });

        res.render('User');   // success page render

    } catch (err) {
        console.error(err);
        res.status(500).send("Error creating user");
    }
});

// GET: Student login Page
router.get('/student_login', (req, res) => {
    res.render('login');
});

app.post('/student_login', async (req, res) => {
    const { email, password } = req.body;

    try {
        //Check in Student model
        const user = await Usermodel.findOne({ email: email, password: password });

        if (user) {
            return res.render('User'); 
        }
        
        // No match 
        return res.send("❌ User not found !!");

    } catch (err) {
        console.log(err);
        res.status(500).send("Server error");
    }
});


module.exports = router;
