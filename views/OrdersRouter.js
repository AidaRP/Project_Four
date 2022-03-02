const express = require('express');
const router = express.Router();

const OrdersController = require('../controllers/OrdersController');

router.get('/', OrdersController.allOrders);

router.post('/', OrdersController.placeNewOrder);


module.exports = router;