const {Router} = require('express');
const router = Router();
const {createFoodCategoryHandler, getAllFoodCategoryHandler} = require('../controllers/foodCategory');


router.get('/all', getAllFoodCategoryHandler);
router.post('/create', createFoodCategoryHandler);

module.exports = router
