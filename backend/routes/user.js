const {Router} = require('express');
const router = Router()
const {createUserHandler} = require('../controllers/user')

router.post('/createUser', createUserHandler);

module.exports = router