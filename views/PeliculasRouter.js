const { Router } = require('express');
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')
const isAdmin = require('../middlewares/isAdmin')

const PeliculasController = require('../controllers/PeliculasController');


//CRUD RESTful

//Leer todas las peliculas
router.get('/',PeliculasController.getAllFilms);


router.post('/', PeliculasController.newFilms);


//Registro de una peli nueva
router.post('/', PeliculasController.registerFilms);


//Búsqueda de películas por título
router.get('/:titulo', PeliculasController.findFilmsTitle);

//Get Film by ID
router.get('/busca/:id',auth, PeliculasController.peliculasId);

//Get Film by ID
router.get('/copy', PeliculasController.copy);

router.delete('/:id', auth, isAdmin, PeliculasController.deleteFilmsById)
//Búsqueda de películas por  favourite
// router.get('/favourites', PeliculasController.favouriteFilms);

//Búsqueda de novedades
// router.get('/news', PeliculasController.getNews);

//Búsqueda de películas por  adulto
// router.get('/adult', PeliculasController.adultFilms);


module.exports = router;