const { order, film, user } = require('../models/index.js');



let filmModel = require('../models').film;

let userModel = require('../models').user;

const OrderController = {
    getAll = (req,res) => {
    order.findAll({
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

    async delete(req, res){
        try {
            await order.destroy({
                where: {
                    id: req.params.id,
                },
            });
            res.send("The Orders has been destroyed succesfully")
        } catch (error) {
            console.error(error);
            res
            .status(500)
            .send({ message: "A unknow error  have been execute for destroy the orders "})
        }
    },

    async update(req,res){
        try {
            await order.update({
                where: {
                    id: req.params.id,
                },
            });
            res.send("The Orders has been updated succesfully")
        } catch (error) {
            console.error(error);
            res
            .status(500)
            .send({ message: "A unknow error have been execute for updating the orders" })
        }
    }





}

module.exports = OrderController;