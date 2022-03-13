const { Order } = require('../models/index');


const OrdersController = {};

OrdersController.placeNewOrder = (req,res) => {
    let body = req.body;

    console.log("Soy body",body)

    Order.create({
        precio: body.precio,
        peliculaId: body.peliculaId,
        usuarioId: body.usuarioId,
        fecha: body.fecha
    })
    .then(pedido => {
        if(pedido){
            res.send(pedido)
        }else{
            res.send("La creación de un nuevo pedido ha fallado");
        }
    })
    .catch((error => {
        res.send(error)
    }))
}

OrdersController.allOrders = async (req,res) => {


    Order.findAll()
    .then(data => {

        res.send(data)
    });

}

module.exports = OrdersController;