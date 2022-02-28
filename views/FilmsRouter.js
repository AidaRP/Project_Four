const { Router } = require('express');
const express = require('express');
const router = express.Router();

const FilmsController = require('../controllers/FilmsController');


//CRUD RESTful

//Leer todas las peliculas
router.post('/', FilmsController.newFilms);
//http://localhost:3000/films

//Registro de una peli nueva
// router.post('/', FilmsController.registerFilms);
// //http://localhost:3000/peliculas

// //Búsqueda de películas por título
// router.get('/title', FilmsController.titleFilms);

// //Búsqueda de películas por  favourite
// router.get('/favourites', FilmsController.favouriteFilms);

// //Búsqueda de novedades
// router.get('/news', FilmsController.getNews);

// //Búsqueda de películas por  adulto
// router.get('/adult', FilmsController.adultFilms);


module.exports = router;