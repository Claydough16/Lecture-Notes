const router = require('express').Router()
const User = require('../models/user.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT;

// const testingBcrypt = password => {

//     let encrypt = bcrypt.hashSync(password, 13);
//     console.log(`ENCRYPT: `, encrypt);
// }


router.post('/signup', async (req, res) => {
    // console.log("Test")
    // res.status(200).send('Connected')
    // testingBcrypt('password');
    // testingBcrypt('password');

    try {

        const { firstName, lastName, email, password } = req.body;

        // Capture data from client
        const user = new User({
            // firstName: req.body.firstName,
            // lastName: req.body.lastName,
            // email: req.body.email,
            // password: bcrypt.hashSync(req.body.password, 13)
            firstName,
            lastName,
            email,
            password: bcrypt.hashSync(password, 13)
        }) // using values from req.body to form our user document.

        const newUser = await user.save();
        // writes to database. Returns a response - why it should be an "await"

        const token = jwt.sign(
            {id: newUser._id}, // payload
            SECRET, // message
            {expiresIn: `1 day`} // options
        )

        res.status(200).json({
            user: newUser,
            message: "Success!",
            token
        })

    } catch (err) {
        res.status(500).json({
            ERROR: err.message
        })
    }
});

router.post('/login', async (req, res) => {
    // res.status(200).send(req.body.email)
    try {

        //1. Capture data provided by our user (body).
        const {email, password} = req.body;

        //2. Check database (db) to see if an email exists.
        const user = await User.findOne({email: email});
        //* A MongoDB method that accepts a query as an argument. Returns an instance of a document that matches.
        // console.log(user);
        if(!user) throw new Error(`Email or Password does not exist`);
        
        //3. If email exists, consider if password matches.
        const passwordMatch = await bcrypt.compare(password, user.password) // returns a true/false value
        //* .compare(string, hashed)

        // console.log(passwordMatch)
        if(!passwordMatch) throw new Error(`Email or Password does not exist`);

        //4. After verified, provide a jwt token
        const token = jwt.sign(
            {id: user._id},
            SECRET,
            {expiresIn: `1 day`}
        )

        //5. Response status returned
        res.status(200).json({
            message: 'Successful!',
            user,
            token
        })


    } catch (err) {
        res.status(500).json({
            ERROR: err.message
        })
    }
})

/* 
! Challenge:
    - Create a '/login' route POST
    - Test route 
        - provide a response of the email within the body.
    - Full URL: 
        localhost:4000/user/login
*/

module.exports = router