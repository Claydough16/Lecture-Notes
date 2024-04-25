require("dotenv").config()
const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")

const PORT = process.env.PORT || 4000

app.get(cookieParser())

app.get("/", (req, res) => {
    res.cookie("mode", "false")
    res.send("We're in the / route")
})

app.get("/light", (req, res) => {
    res.cookie("mode", "true")
    res.send("Your cookie is now true")
})

app.get("/dark", (req, res) => {
    res.cookie("mode", "false")
    res.send("Your cookie is now false")
})

app.listen(PORT, (req, res) => {
    console.log(`You are listening on port ${PORT}`)
})