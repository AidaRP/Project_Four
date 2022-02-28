
const { Users} = require("../models/index.js");
const { Op } = require("sequelize");
const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');
const jwt = require('jsonwebtoken');

const UsersController = {};


//Users Controller functions

UsersController.getUsers = (req, res) => {
    //Search get All users
    Users
    .findAll()
    .then(data => {

        res.send(data)
    });

};

UsersController.getUsersId = (req, res) => {
    //Search a one Id
    Users
    .findByPk(req.params.id)
    .then(data => {
        res.send(data)
    });
};

UsersController.getUsersEmail = (req, res) => {
    //Search comparing a one field work
    Users
    .findOne({ where : { email : req.params.email }})
    .then(data => {
        res.send(data)
    });
}

UsersController.registerUsers = async (req, res) => {
    
    //Register a User

    
        let name = req.body.name;
        let age = req.body.age;
        let surname = req.body.surname;
        let nickname = req.body.nickname;
        let email = req.body.email;
        console.log("before encriptation",req.body.password);
        let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds)); 
        
        console.log("this is the password", password);

        //Error verification...
        
        //Guardamos en sequelize el Users


        Users.findAll({
            where : {

                [Op.or] : [
                    {
                        email : {
                            [Op.like] : email
                        }
                    },
                    {
                        nickname : {
                            [Op.like] : nickname
                        }
                    }
                ]

            }

        }).then(repeatData => {

            if(repeatData == 0){

                    Users.create({
                    name: name,
                    age: age,
                    surname: surname,
                    email: email,
                    password: password,
                    nickname: nickname
                }).then(User => {
                    res.send(`${Users
                        .name}, Welcome to the jungle`);
                })
                .catch((error) => {
                    res.send(error);
                });

            }else {
                res.send("This Users with this email already exist in the Data Base");
                
            }
        }).catch(error => {
            res.send(error)
        });

    
    
};

UsersController.updateProfile = async (req, res) => {

    let data = req.body;

    let id = req.params.id;

    try {

        User
        .update(data, {
            where: {id : id}
        })
        .then(update => {
            res.send(update);
        });

    } catch (error) {
        res.send(error);
    }

};

UsersController.updatePassword = (req,res) => {

    console.log("Welcome");

    let id = req.body.id;

    let oldPassword = req.body.oldPassword;

    let newPassword = req.body.newPassword;

    User.findOne({
        where : { id : id}
    }).then(UserFound => {

        if(UserFound){

            if (bcrypt.compareSync(oldPassword, UserFound.password)) {

                //If the password is correct

                //First..encriptation of new password...

                newPassword = bcrypt.hashSync(newPassword, Number.parseInt(authConfig.rounds)); 

                ////////////////////////////////7

                //Secondly save new password in database

                let data = {
                    password: newPassword
                }

                console.log("this is data",data);
                
                User
                .update(data, {
                    where: {id : id}
                })
                .then(actualizado => {
                    res.send(actualizado);
                })
                .catch((error) => {
                    res.status(401).json({ msg: `Ha ocurrido un error actualizando el password`});
                });

            }else{
                res.status(401).json({ msg: "User or password denied" });
            }


        }else{
            res.send(`User
             not found`);
        }

    }).catch((error => {
        res.send(error);
    }));

};

UsersController.deleteAll = async (req, res) => {

    try {

        User
        .destroy({
            where : {},
            truncate : false
        })
        .then(UsersEliminated => {
            res.send(`Have been eliminated ${UsersEliminated} Users`);
        })

    } catch (error) {
        res.send(error);
    }

};

UsersController.deleteById = async (req, res) => {

    let id = req.params.id;

    try {

        User
        .destroy({
            where : { id : id },
            truncate : false
        })
        .then(UserEliminated => {
            console.log(UserEliminated);
            res.send(`The user with id ${id} has been eliminated`);
        })

    } catch (error) {
        res.send(error);
    }

};


UsersController.logUser= (req, res) => {

    let correo = req.body.email;
    let password = req.body.password;

    User
    .findOne({
        where : {email : correo}
    }).then(User => {

        if(!User
            ){
            res.send("User or password denied");
        }else {
          
            //If the User already existes we go comprobate her password

            if (bcrypt.compareSync(password, User
                .password)) { //Compare password introduced with password setted for encriptation

                console.log(User.password);

                let token = jwt.sign({ User
                    : User
                 }, authConfig.secret, {
                    expiresIn: authConfig.expires
                });

                res.json({
                    User
                    : User
                    ,
                    token: token
                })
            } else {
                res.status(401).json({ msg: "User or password denied" });
            }
        };


    }).catch(error => {
        res.send(error);
    })
};

module.exports = UsersController;