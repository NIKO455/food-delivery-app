const User = require('../models/user')
const {generateUsername} = require("unique-username-generator");
const {query, validationResult} = require('express-validator');


async function createUserHandler(req, res) {
    const {name, email, password, confirmPassword, avatar} = req.body;
    try {
        if (!name || !email || !password || !confirmPassword || !avatar) {
            return res.status(400).json({status: 400, message: "Some fields are missing!"})
        }

        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({status: 400, message: result.array()[0].msg})
        }

        if (password !== confirmPassword) {
            return res.status(400).json({status: 400, message: "Something is wrong with password!"})
        }

        const username = generateUsername("-");

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