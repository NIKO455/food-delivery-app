const {Router} = require('express');
const router = Router()
const {createFoodItemHandler} = require('../controllers/foodItem')

router.post('/create', createFoodItemHandler);

module.exports = router