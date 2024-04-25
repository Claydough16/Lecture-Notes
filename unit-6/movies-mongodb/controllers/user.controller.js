const router = require('express').Router()
const User = require('../models/user.model')

router.post('/signup', async (req, res) => {
    // console.log("Test")
    // res.status(200).send('Connected')

    try {

        // Capture data from client
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        }) // using values from req.body to form our user document.

        const newUser = await user.save();
        // writes to database. Returns a response - why it should be an "await"

        res.status(200).json({
            user: newUser,
            message: "Success!"
        })

    } catch (err) {
        res.status(500).json({
            ERROR: err.message
        })
    }
});

module.exports = router