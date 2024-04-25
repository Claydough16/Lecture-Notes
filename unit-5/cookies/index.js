/* 
    ? Cookies
    * a piece of data
    * set by web server
    * stored by the web client
    * server sends it back to the client on every request
    
    ? Usefulness
    * tracking users
    * tracking where you've been
    
    ? Limitations
    * not secure
    * cross origin limitations
    
    ? Cookie Headers
    * request `Cookie`
    * response `Set-Cookie`
*/
require("dotenv").config()
const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")

const PORT = process.env.PORT || 4000

app.use(cookieParser())
app.get("/", (req, res) => {
    res.cookie("cohort", "ptsb-feb-2024")
    res.send("Congrats, you just sent a cookie!")
})

app.get("/getcookie", (req, res) => {
    console.log(req.cookies)
    res.cookie("cookieMonster", "false")
    res.send("We're in the /getcookies route")
})

app.get("/deletecookies", (req, res) => {
    res.clearCookie("cohort")
    res.clearCookie("cookieMonster")
    res.send("We cleared our cookies!")
})

app.listen(PORT, () => console.log(`server is running on ${PORT}`))

/* 
    ? Challenge
    * spin up a whole new project called lightModeDarkMode
    * install express, dotenv, nodemon, and cookie-parser
    * setup your scripts
    * build a basic server
    * setup a route that when hit, creates a new cookie called:
        * mode
        * set its default value to false
    * setup a route called light that will change the value of mode to true
    * setup a route called dark that will change the value of mode to false
    * you can test this in postman or in the browser
*/

