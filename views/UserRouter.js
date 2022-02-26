const express = require('express');
const router = express.Router();
const auth = require("../middlewares/authentik");
const isAdmin = require("../middlewares/isAdmin");

const UserController = require('../controllers/UserController');

//CRUD RESTful

//GET
//Leer todos los user
router.get('/', auth,  UserController.getUsers);
router.get('/:id', auth, UserController.getUsersId);
router.get('/email/:email', auth, UserController.getUsersEmail);
//http://localhost:3000/user


//POST
//Registro
router.post('/', UserController.registerUser);
//http://localhost:3000/User
//Login
router.post('/login', UserController.logUser);
//https://localhost:3000/User/login


//PUT
//Modificar datos de un User
router.put('/newpassword', auth, UserController.updatePassword);
router.put('/:id', auth, UserController.updateProfile);


//DELETE
//Borramos a todos los User
router.delete('/', isAdmin, UserController.deleteAll);

//Borramos a todos los User
router.delete('/:id', auth, UserController.deleteById);




module.exports = router;






