require('dotenv').config()
const express = require('express')
const app = express();
const port = 5000
const mongoDB = require('./config/connection')
const userRoute = require('./routes/user')

// mongodb connection
mongoDB()

// middleware setup
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", " http://localhost:5173")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use('/', userRoute)

app.listen(process.env.PORT, () => {
    console.log(`Running in PORT: ${process.env.PORT}`)
})