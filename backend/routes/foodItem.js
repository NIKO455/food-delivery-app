const {Router} = require('express');
const router = Router()
const {createFoodItemHandler, getAllFoodItemHandler} = require('../controllers/foodItem')

router.get('/all', getAllFoodItemHandler);
router.post('/create', createFoodItemHandler);

module.exports = router