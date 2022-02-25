const { Router } = require('express');
const express = require('express');
const router = express.Router();

const FilmsController = require('../controllers/FilmsController');


//DECLARE CRUD RESTFULL

//Read all films
router.get('/',FilmsController.getFilms);
//http://localhost:3000/peliculas

//Register a new film
router.post('/', FilmsController.filmRegister);
//http://localhost:3000/peliculas

//Search films for favorite category
router.get('/favorite', FilmsController.favouriteFilms);

//Search new films for  adult category
router.get('/adults', FilmsController.adultFilms);

//Search films for her title
router.get('/title', FilmsController.titleFilms);

//Seacrh a News Films
router.get('/news', FilmsController.traeNovedades);

module.exports = router;