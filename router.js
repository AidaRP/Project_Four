const router = require('express').Router();

// const auth = require('./middlewares/auth');

const FilmsRouter = require('./views/FilmsRouter');
const OrdersRouter = require('./views/OrdersRouter');
const UserRouter = require('./views/UserRouter');

router.use('/films', FilmsRouter); 
router.use('/orders', OrdersRouter); 
router.use('/user', UserRouter); 

module.exports = router;