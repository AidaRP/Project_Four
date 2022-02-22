const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.js');

const OrdersController = require('../controllers/OrdersController');

router.get('/', auth, OrdersController.getAll);
router.post('/', auth, OrdersController.create);
router.delete('/:id', auth, OrdersController.delete);


module.exports = router;