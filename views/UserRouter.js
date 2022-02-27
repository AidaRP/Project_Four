const express = require('express');
const router = express.Router();
const auth = require("../middlewares/authentik");
const isAdmin = require("../middlewares/isAdmin");

const UserController = require('../controllers/UserController');

//CRUD RESTful

//GET
//Get All Users, User for Id && Users for email
router.get('/', auth,  UserController.getUsers);
router.get('/:id', auth, UserController.getUsersId);
router.get('/email/:email', auth, UserController.getUsersEmail);



//POST
//Register
router.post('/', UserController.registerUser);
//Login
router.post('/login', UserController.logUser);




//PUT
//Modify User data
router.put('/newpassword', auth, UserController.updatePassword);
router.put('/:id', auth, UserController.updateProfile);


//DELETE
//Delete All Users
router.delete('/', isAdmin, UserController.deleteAll);

//Delete the user for his ID
router.delete('/:id', auth, UserController.deleteById);

module.exports = router;









