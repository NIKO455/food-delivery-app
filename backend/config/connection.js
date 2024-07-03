const mongoose = require('mongoose')

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI).then(() => {
            console.log("Connected to mongoDB!")
        })
    } catch (e) {
        console.log("Failed to connect mongoDB!")
    }
}

module.exports = connectDB