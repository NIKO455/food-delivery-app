const {Router} = require('express');
const router = Router()
const {createOrderHandler, getAllOrderHandler} = require('../controllers/order')

router.post('/', getAllOrderHandler);
router.post('/create', createOrderHandler);

module.exports = router