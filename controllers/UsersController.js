const { Users } = require('../models/index');
const { Op } = require("sequelize");
const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');
const jwt = require('jsonwebtoken');

const UsersController = {};


//Funciones del controlador

UsersController.getUsers = (req, res) => {
    //Búsqueda trayendo a todos los Users
    Users.findAll()
    .then(data => {

        res.send(data)
    });

};

UsersController.getUsersId = (req, res) => {
    //Búsqueda buscando una Id
    Users.findByPk(req.params.id)
    .then(data => {
        res.send(data)
    });
};

UsersController.getUsersEmail = (req, res) => {
    //Búsqueda comparando un campo
    Users.findOne({ where : { email : req.params.email }})
    .then(data => {
        res.send(data)
    });
}

UsersController.registerUsers = async (req, res) => {
    
    //Registrando un Users
    
        let name = req.body.name;
        let age = req.body.age;
        let surname = req.body.surname;
        let nickname = req.body.nickname;
        let email = req.body.email;
        console.log("before encriptation",req.body.password);
        let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds)); 
        
        console.log("This is your pass", password);
        //Comprobación de errores.....
        
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

        }).then(datosRepetidos => {

            if(datosRepetidos == 0){

                    Users.create({
                    name: name,
                    age: age,
                    surname: surname,
                    email: email,
                    password: password,
                    nickname: nickname
                }).then(Users => {
                    res.send(`${Users.name}, Welcome to the jungle`);
                })
                .catch((error) => {
                    res.send(error);
                });

            }else {
                res.send("The user with this email already exists");
            }
        }).catch(error => {
            res.send(error)
        });

    
    
};

UsersController.updateProfile = async (req, res) => {

    let datos = req.body;

    let id = req.params.id;

    try {

        Users.update(datos, {
            where: {id : id}
        })
        .then(actualizado => {
            res.send(actualizado);
        });

    } catch (error) {
        res.send(error);
    }

};

UsersController.updatePassword = (req,res) => {

    console.log("volando voy");

    let id = req.body.id;

    let oldPassword = req.body.oldPassword;

    let newPassword = req.body.newPassword;

    Users.findOne({
        where : { id : id}
    }).then(UsersFound => {

        if(UsersFound){

            if (bcrypt.compareSync(oldPassword, UsersFound.password)) {

                //En caso de que el Password antiguo SI sea el correcto....

                //1er paso..encriptamos el nuevo password....

                newPassword = bcrypt.hashSync(newPassword, Number.parseInt(authConfig.rounds)); 

                ////////////////////////////////7

                //2do paso guardamos el nuevo password en la base de datos

                let data = {
                    password: newPassword
                }

                console.log("esto es data",data);
                
                Users.update(data, {
                    where: {id : id}
                })
                .then(actualizado => {
                    res.send(actualizado);
                })
                .catch((error) => {
                    res.status(401).json({ msg: `Has been a error while updating the token`});
                });

            }else{
                res.status(401).json({ msg: "Users or invalid password" });
            }


        }else{
            res.send(`Users not found`);
        }

    }).catch((error => {
        res.send(error);
    }));

};

UsersController.deleteAll = async (req, res) => {

    try {

        Users.destroy({
            where : {},
            truncate : false
        })
        .then(UsersDelete => {
            res.send(`Has been deleted ${UsersDelete} Users`);
        })

    } catch (error) {
        res.send(error);
    }

};

UsersController.deleteById = async (req, res) => {

    let id = req.params.id;

    try {

        Users.destroy({
            where : { id : id },
            truncate : false
        })
        .then(UsersDelete => {
            console.log(UsersDelete);
            res.send(`The users with id ${id} has been deleted`);
        })

    } catch (error) {
        res.send(error);
    }

};


UsersController.logUsers = (req, res) => {

    let correo = req.body.email;
    let password = req.body.password;

    Users.findOne({
        where : {email : correo}
    }).then(Users => {

        if(!Users){
            res.send("Users or invalid password");
        }else {
            //el Users existe, por lo tanto, vamos a comprobar
            //si el password es correcto

            if (bcrypt.compareSync(password, Users.password)) { //COMPARA CONTRASEÑA INTRODUCIDA CON CONTRASEÑA GUARDADA, TRAS DESENCRIPTAR

                console.log(Users.password);

                let token = jwt.sign({ Users: Users }, authConfig.secret, {
                    expiresIn: authConfig.expires
                });

                res.json({
                    Users: Users,
                    token: token
                })
            } else {
                res.status(401).json({ msg: "Users or invalid password" });
            }
        };


    }).catch(error => {
        res.send(error);
    })
};

module.exports = UsersController;