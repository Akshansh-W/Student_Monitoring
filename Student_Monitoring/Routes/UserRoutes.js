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

module.exports = router;
