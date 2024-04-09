const router = require('express').Router(); // create a variable -> import Router Engine from Express

router.get('/hello-world', (req, res) => {
    /* 
        - the pathway noted as a string "/hello-world"
        - a callback function to handle the request and response
            -req, res
    */

    res.send('Hello World');
})

/* 
!   Challenge
    - Request Type: POST
    - Endpoint: "greeting"
    - Send: "Good Afternoon!" as a string
    - Test: Postman
        * hint: GET should be POST
*/

router.post('/greeting', (req, res) => {
    // res.send('Good Afternoon!')
    res.status(200).send('Good Afternoon!')
})

module.exports = router;
//! Don't forget to export the defined route