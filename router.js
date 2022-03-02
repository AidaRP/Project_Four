const router = require('express').Router();

// const auth = require('./middlewares/auth');

const PeliculasRouter = require('./views/PeliculasRouter');
const OrdersRouter = require('./views/OrdersRouter');
const UsuariosRouter = require('./views/UsuariosRouter');

router.use('/peliculas', PeliculasRouter); 
router.use('/orders', OrdersRouter); 
router.use('/usuarios', UsuariosRouter); 

module.exports = router;