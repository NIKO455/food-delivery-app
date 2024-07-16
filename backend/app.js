require('dotenv').config()
const express = require('express')
const app = express();
const port = 5000
const mongoDB = require('./config/connection')
const userRoute = require('./routes/user')
const foodCategoryRoute = require('./routes/foodCategory')
const foodItemRoute = require('./routes/foodItem')
const orderRoute = require('./routes/order')

// mongodb connection
mongoDB()

// middleware setup
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
app.use(express.json())
app.use(express.urlencoded({extended: true}));

// routes
app.get('/', (req, res) => {
    res.send("Hello 👋, this is working fine");
})
app.use('/user', userRoute)
app.use('/order', orderRoute)
app.use('/foodCategory', foodCategoryRoute)
app.use('/foodItem', foodItemRoute)

// server
app.listen(process.env.PORT, () => {
    console.log(`Running in PORT: ${process.env.PORT}`)
})