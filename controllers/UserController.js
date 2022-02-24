
const { User, Post, Token, Sequelize} = require("../models/index.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwt_secret} = require("../config/config.json")["development"];
const { Op } = Sequelize;

const UserController = {
    create(req, res){
        if (/^[a-zA-Z]\w{3,14}$/i.test(req.body.password) !== true){
            return res.send(
                "The password will have a letter how fisrt character and will have 4 letters how minimun and 15 letters how maximun, only you can use letters, numbers and underscore "
            );
        }
        req.body.rol = "user";
        const hash = bcrypt.hashSync(req.body.password, 10);
        User.create({...req.body, password:hash })
        .then((user) =>
        res.status(201).send({ message: "Usuario creado con éxito", user})
        )
        .catch((err) => {
            console.error(err);
            res.status(400).send({ msg: err.errors[0].message})
        });
        
    },

    getAll(req, res){
        User.findAll({
            include:[Post],
        })
        .then((users) =>
        res.status(200)
        .send({ description: "All users welcome with success "})
        )
        .catch((err) => {
            console.error(err);
            res.status(500)
            .send({ message: "The users haven't been loading "})

        });
        
    },

    async delete(req, res) {
        try {
            await User.destroy({
                where: {
                    id: req.params.id,
                },
            });
            await Post.destroy({
                where: {
                    UserId: req.params.id,
                },
            });
            res.send("The user has been destroy with success");
        } catch (error) {
            console.error(error);
            res
            .status(500)
            .send({ message: "A error unknow have been execute for destroy the user"})
        }
    },

    async update(req, res){
        try {
            await User.update(
                { ...req.body },
                {
                    where: {
                        id: req.params.id,
                    },
                }
            );
            res.send("The User has been update with success");
        }catch (error){
            console.error(error);
            res
            .status(500)
            .send({ message: "Havent possible update the User" });
        }
    },
 

}

