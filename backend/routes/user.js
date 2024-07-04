const {Router} = require('express');
const router = Router()
const {body, validationResult} = require('express-validator')
const {createUserHandler, loginUserHandler} = require('../controllers/user')

router.post('/login', loginUserHandler);

router.post('/create', [
    body('email', "Enter a valid email!").isEmail(),
    body('password', "Password must be greater than 5 character!").isLength({min:5}),
], createUserHandler);

module.exports = router