// console.log("Backend COde Deployment in Production")

require('dotenv').config()
const express = require('express')
const app = express()

const port = 4000

app.get('/', (req, res) => {
    res.send('How to Deploy Backend code in Production')
})

app.get('/facebook', (req, res) => {
    res.send("sandeepatel.com")
})

app.get('/yt', (req, res) => {
    res.send("<h1> Backend Code </h1>")
    // res.send("<h2> How to Deploy Backend code in Production </h2> ")
})

app.listen(process.env.PORT, () => {
    console.log(` app listening on port ${port}`)
})