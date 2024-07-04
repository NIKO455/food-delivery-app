const User = require('../models/user')
const {generateUsername} = require("unique-username-generator");
const {query, validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const generatePayload = require('../utils/generatePayload')

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

        let response = await bcrypt.compare(password, user.password);

        if (!response) {
            return res.status(404).json({status: 404, message: "Invalid email or password!"});
        }

        let token = jwt.sign(generatePayload(user), process.env.JWT_SECRET_KEY)

        return res.status(200).json({status: 200, message: "You are loggedIn!", data: {token}});

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

        let user = User.findOne({email});

        if(user){
            return res.status(400).json({status: 400, message: "User already exists with this email!"})
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