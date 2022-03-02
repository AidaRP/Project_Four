const { Usuario } = require('../models/index');
const { Op } = require("sequelize");
const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');
const jwt = require('jsonwebtoken');

const UsuariosController = {};


// Funciones del controlador

UsuariosController.getUsers = (req, res) => {
    //Búsqueda trayendo a todos los Users
    Usuario.findAll()
    .then(data => {

        res.send(data)
    });

};

UsuariosController.getUsersId = (req, res) => {
    //Búsqueda buscando una Id
    User.findByPk(req.params.id)
    .then(data => {
        res.send(data)
    });
};

// UsuariosController.getUsersEmail = (req, res) => {
//     //Búsqueda comparando un campo
//     User.findOne({ where : { email : req.params.email }})
//     .then(data => {
//         res.send(data)
//     });
// }

UsuariosController.registerUsers = async (req, res) => {
    
    //Registrando un usuario
    
    let name = req.body.name;
    let age = req.body.age;
    let surname = req.body.surname;
    let nickname = req.body.nickname;
    let email = req.body.email;
    console.log("antes de encriptar",req.body.password);
    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds)); 
    
    console.log("este es el password", password);
    //Comprobación de errores.....
    
    //Guardamos en sequelize el usuario

    Usuario.findAll({
        where : {

            [Op.or] : [
                {
                    email : {
                        [Op.like] : email
                    }
                }
            ]

        }

    }).then(datosRepetidos => {

        if(datosRepetidos == 0){

                Usuario.create({
                name: name,
                age: age,
                surname: surname,
                email: email,
                password: password,
                nickname: nickname
            }).then(usuario => {
                res.send(`${usuario.name}, Welcome to the jungle!🦄🍀`);
            })
            .catch((error) => {
                res.send(error);
            });

        }else {
            res.send("El usuario con ese e-mail ya existe en nuestra base de datos");
        }
    }).catch(error => {
        res.send(error)
    });

    
};

UsuariosController.updateProfile = async (req, res) => {

    let datos = req.body;

    let id = req.params.id;

    try {

        User.update(datos, {
            where: {id : id}
        })
        .then(actualizado => {
            res.send(actualizado);
        });

    } catch (error) {
        res.send(error);
    }

};

UsuariosController.updatePassword = (req,res) => {

    console.log("volando voy");

    let id = req.body.id;

    let oldPassword = req.body.oldPassword;

    let newPassword = req.body.newPassword;

    usuario.findOne({
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
                
                User.update(data, {
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

UsuariosController.deleteAll = async (req, res) => {

    try {

        User.destroy({
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

UsuariosController.deleteById = async (req, res) => {

    let id = req.params.id;

    try {

        Usuario.destroy({
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


UsuariosController.logUsers = (req, res) => {

    let email = req.body.email;
    let password = req.body.password;

    Usuario.findOne({
        where : {email : email}
    }).then(Usuario => {

        if(!Usuario){
            res.send("Users or invalid password");
        }else {
            //el Users existe, por lo tanto, vamos a comprobar
            //si el password es correcto

            if (bcrypt.compareSync(password, Usuario.password)) { //COMPARA CONTRASEÑA INTRODUCIDA CON CONTRASEÑA GUARDADA, TRAS DESENCRIPTAR

                console.log(Usuario.password);

                let token = jwt.sign({ usuario: Usuario }, authConfig.secret, {
                    expiresIn: authConfig.expires
                });

                res.json({
                    usuario: Usuario,
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

module.exports = UsuariosController;