const { Router } = require('express');
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')
const isAdmin = require('../middlewares/isAdmin')

const PeliculasController = require('../controllers/PeliculasController');


//CRUD RESTful

router.get('/',PeliculasController.getAllFilms);
//Leer todas las peliculas
router.post('/', PeliculasController.newFilms);
//http://localhost:3000/films

//Registro de una peli nueva
router.post('/', PeliculasController.registerFilms);
//http://localhost:3000/peliculas

//Búsqueda de películas por título
router.post('/', PeliculasController.findFilmsTitle);

//Get Film by ID
router.get('/:id',auth, PeliculasController.peliculasId);

router.delete('/:id', auth, isAdmin, PeliculasController.deleteFilmsById)
//Búsqueda de películas por  favourite
// router.get('/favourites', PeliculasController.favouriteFilms);

//Búsqueda de novedades
// router.get('/news', PeliculasController.getNews);

//Búsqueda de películas por  adulto
// router.get('/adult', PeliculasController.adultFilms);


module.exports = router;