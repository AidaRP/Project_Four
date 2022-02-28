const express = require('express');
const router = express.Router();
const auth = require("../middlewares/authentik");
const isAdmin = require("../middlewares/isAdmin");

const UsersController = require('../controllers/UsersController');

//CRUD RESTful

//GET
//Get All Users, User for Id && Users for email
router.get('/', auth,  UsersController.getss);
router.get('/:id', auth, UsersController.getUsersId);
router.get('/email/:email', auth, UsersController.getUsersEmail);



//POST
//Register
router.post('/', UsersController.registerUsers);
//Login
router.post('/login', UsersController.logUsers);




//PUT
//Modify Users data
router.put('/newpassword', auth, UsersController.updatePassword);
router.put('/:id', auth, UsersController.updateProfile);


//DELETE
//Delete All Users
router.delete('/', isAdmin, UsersController.deleteAll);

//Delete the user for his ID
router.delete('/:id', auth, UsersController.deleteById);

module.exports = router;









