const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");

const UsuariosController = require('../controllers/UsuariosController');

//CRUD RESTful

//Leer todos los usuarios
router.get('/', auth, UsuariosController.getUsers);



// router.get('/email/:email', auth, UsuariosController.getUsersEmail);
router.get('/:id', auth, UsuariosController.getUsersId);

//Registro
router.post('/', UsuariosController.registerUsers);


//Modificar datos de un Usuario
router.put('/newpassword', auth, UsuariosController.updatePassword);
router.put('/:id', auth, UsuariosController.updateProfile);


//Borramos a todos los usuarios
router.delete('/', isAdmin, UsuariosController.deleteAll);

//Borramos a todos los usuarios
router.delete('/:id', auth, UsuariosController.deleteById);

//Login
router.post('/login', UsuariosController.logUsers);



module.exports = router;