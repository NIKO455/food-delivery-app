require('dotenv').config()
const express = require('express')
const app = express();
const port = 5000
const mongoDB = require('./config/connection')

// mongodb connection
mongoDB()

app.get('/', (req, res)=>{
    res.send("Hello, world!");
})

app.listen(process.env.PORT, ()=>{
    console.log(`Running in PORT: ${process.env.PORT}`)
})