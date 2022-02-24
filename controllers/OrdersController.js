const { order, film, user } = require('../models/index.js');



let filmModel = require('../models').film;

let userModel = require('../models').user;

const OrderController = {
    getAll = (req,res) => {
    Order.findAll({
        include:[order],
    })
    .then((orders) => 
    res.status(200)
    .send({ description: "¡All orders have been get succesfully!🥳 "})
    )
    .catch((err) => {
        console.error(err);
        res.status(500)
        .send({ message: "The orders haven't been loading"})
    });


    },

    





}