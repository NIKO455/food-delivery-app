const {Router} = require('express');
const router = Router()
const {createFoodCategoryHandler} = require('../controllers/foodCategory')

router.post('/create', createFoodCategoryHandler);

module.exports = router