const router = require('express').Router();

// const auth = require('./middlewares/auth');

const FilmsRouter = require('./views/FilmsRouter');
const OrdersRouter = require('./views/OrdersRouter');
const UsersRouter = require('./views/UsersRouter');

router.use('/films', FilmsRouter); 
router.use('/orders', OrdersRouter); 
router.use('/users', UsersRouter); 

module.exports = router;