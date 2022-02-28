const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");

const UsersController = require('../controllers/UsersController');

//CRUD RESTful

//Leer todos los usuarios
router.get('/', auth, UsersController.getUsers);
//http://localhost:3001/usuarios


router.get('/email/:email', auth, UsersController.getUsersEmail);
router.get('/:id', auth, UsersController.getUsersId);

//Registro
router.post('/', UsersController.registerUsers);
//http://localhost:3000/usuarios

//Modificar datos de un Usuario
router.put('/newpassword', auth, UsersController.updatePassword);
router.put('/:id', auth, UsersController.updateProfile);


//Borramos a todos los usuarios
router.delete('/', isAdmin, UsersController.deleteAll);

//Borramos a todos los usuarios
router.delete('/:id', auth, UsersController.deleteById);

//Login
router.post('/login', UsersController.logUsers);
//https://localhost:3000/usuarios/login


module.exports = router;