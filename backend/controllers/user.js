const User = require('../models/user')

async function createUserHandler(req, res) {

    const {name, email, password, confirmPassword, avatar} = req.body;

    try {

        if (!name  || !email || !password || !confirmPassword || !avatar) {
            return res.status(400).json({status: 400, message: "Some fields are missing!"})
        }

        if (password !== confirmPassword || password.length < 6) {
            return res.status(400).json({status: 400, message: "Something is wrong with password!"})

        }

        let username = Date.now();

        await User.create({
            name,
            username,
            email,
            password,
            avatar,
        })
        return res.status(201).json({status: 201, message: "User created successfully!"})
    } catch (e) {
        return res.status(500).json({status: 500, message: "Some error has occurred!"})
    }
}

module.exports = {createUserHandler}