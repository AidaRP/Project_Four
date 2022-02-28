
const { Order } = require('../models/index');


const OrdersController = {};

//Orders Controller functions

OrdersController.placeNewOrder = (req,res) => {
    
    let body = req.body;

    console.log("This is body",body)

    Order.create({
        price: body.price,
        peliculaId: body.filmId,
        usuarioId: body.userId,
        fecha: body.date
    })
    .then(Order => {
        if(Order){
            res.send(Order)
        }else{
            res.send("The creation of a new order has been failed");
        }
    })
    .catch((error => {
        res.send(error)
    }))
}

OrdersController.allOrders = async (req,res) => {

    let consulta = `SELECT user.name AS nombre, film.title AS titulo , films.news AS top_rated, user.name AS Nick, user.email AS email
    FROM users INNER JOIN orders 
    ON user.id = orders.userId INNER JOIN film 
    ON film.id = orders.filmId WHERE news > 6 AND name LIKE '%Ra%' ORDER BY news DESC`; 

    let result = await Order.sequelize.query(consulta,{
        type: Order.sequelize.QueryTypes.SELECT});

    if(result){
        res.send(result);
    }

}
module.exports = OrdersController;