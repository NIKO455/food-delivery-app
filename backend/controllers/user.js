const User = require('../models/user')
const {generateUsername} = require("unique-username-generator");
const {query, validationResult} = require('express-validator');
const bcrypt = require('bcrypt')

async function loginUserHandler(req, res) {
    const {email, password} = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({status: 400, message: "Some fields are missing!"});
        }

        let user = await User.findOne({email});

        if (!user) {
            return res.status(404).json({status: 404, message: "No user found with this email!"});
        }

        if (user.password !== password) {
            return res.status(404).json({status: 404, message: "Invalid email or password!"});
        }
        return res.status(200).json({status: 200, message: "You are loggedIn!"});

    } catch (e) {
        return res.status(500).json({status: 500, message: "Some error has occurred!"})
    }
}

async function createUserHandler(req, res) {
    const {name, email, password, confirmPassword} = req.body;
    try {
        if (!name || !email || !password || !confirmPassword) {
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
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await User.create({
            name,
            username,
            email,
            password: hashedPassword,
            avatar: 'image',
        })
        return res.status(201).json({status: 201, message: "User created successfully!"})
    } catch (e) {
        return res.status(500).json({status: 500, message: "Some error has occurred!"})
    }
}

module.exports = {createUserHandler, loginUserHandler}