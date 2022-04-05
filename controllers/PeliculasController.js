
const { Pelicula } = require('../models/index');
const { Op } = require("sequelize");
const axios = require("axios");
const compareSync = require("bcrypt")



const PeliculasController = {};




//GET
PeliculasController.getAllFilms = (req, res) => {
    Pelicula.findAll()
    .then(data => {

        res.send(data)
    });
};

PeliculasController.findFilmsTitle = (req, res) => {
    //Búsqueda comparando un campo
    Pelicula.findAll({ where : { title : req.body.title }})
    .then(data => {
        res.send(data)
    });
}
PeliculasController.peliculasId = (req, res) => {
    //Búsqueda comparando un campo
    Pelicula.findByPk(req.params.id)
    .then(data => {
        if (data){
            res.send(data)
        }else{
            res.status(404).json({message : "Vete a otro videoclub no hemos encontrado tu pelicula" });
        }
        console.log(data, 'data');
    })
    .catch(err => {
        res.send(err)
        console.log(err)
    });
    
}

// PeliculasController.getFilmsYear = (req, res) => {
//     //Búsqueda comparando un campo
//     Film.findOne({ where : { year : req.params.year }})
//     .then(data => {
//         res.send(data)
//     });
// }

// PeliculasController.getFilmsActors = (req, res) => {
//     //Búsqueda comparando un campo
//     Film.findOne({ where : { actors : req.params.actors }})
//     .then(data => {
//         res.send(data)
//     });
// }

// PeliculasController.getFilmsGender = (req, res) => {
//     //Búsqueda comparando un campo
//     Film.findOne({ where : { gender : req.params.gender }})
//     .then(data => {
//         res.send(data)
//     });
// }

// PeliculasController.getFilmsCity = (req, res) => {
//     //Búsqueda comparando un campo
//     Film.findOne({ where : { city : req.params.city }})
//     .then(data => {
//         res.send(data)
//     });
// }

// PeliculasController.getFilmsRentOut = (req, res) => {
//     //Búsqueda comparando un campo
//     Film.findOne({ where : { rent_out : req.params.rent_out }})
//     .then(data => {
//         res.send(data)
//     });
// }




// POST
PeliculasController.registerFilms = (req, res) => {
    Pelicula.findByPk(req.params.id)
    .then(data => {
        res.send(data)
    });
};

PeliculasController.newFilms = (req, res) => {

        let peli = req.body ;
        Pelicula.create({
            
            title:peli.title,
            synopsis:peli.synopsis,
            adult:peli.adult,
            popularity:peli.popularity,
            image:peli.image,
           
        })
        .then(film => {
            res.send(film);
        })
        .catch(err => {
            res.send(err);
        })

};


//DELETE
PeliculasController.deleteFilmsById = (req,res) => {
   
    let id = req.params.id;

    try {

        Pelicula.destroy({
            where : { id : id },
            truncate : false
        })
        .then(PeliculaDelete => {
            console.log(PeliculaDelete);
            res.send(`The Films with id ${id} has been deleted`);
        })

    } catch (error) {
        res.send(error);
    }

};

//COPY
    PeliculasController.copy = async (req, res) => {

        const minMaxRoundedRandom = (min, max) => {
            return Math.round(Math.random() * (max - min) + min);
        }

        ///Variable para guardar el root para ver el póster
        let TMDBimgUrlRoot = "https://image.tmdb.org/t/p/original";
        //Endpoint para traerme una página entera de películas. Necesario para tenerlo una primera vez
        let firstScan = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
        //bucle para recorrer 25 páginas de resultados. El valor de page lo saco de una función random para que no siempre muestre las mismas páginas.
        for(let j=1 ; j<=25 ; j++) {
            let results = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${minMaxRoundedRandom(1, 25)}&with_watch_monetization_types=flatrate`);
            //Saco el número de resultados por página para meterselo al siguiente bucle

            console.log(
                results.data, "ESTO ES RESULTSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS"
            )

            let numbOfResultsPerPageTMDB = results.data.results.length
            //Recorro cada elemento de la página para ir guardándolo acorde a los campos de mi BBDD
            for(let i=0; i<numbOfResultsPerPageTMDB ; i++) {
                //Por cada iteración creo un elemento
                Pelicula.create({
                    //A la izquierda mis campos de mi BBDD
                    //A la derecha los campos que devuelve TMDB
                    title : results.data.results[i].original_title,
                    synopsis : results.data.results[i].overview,
                    adult : results.data.results[i].adult,
                    popularity: results.data.results[i].popularity,
                    image : (TMDBimgUrlRoot + "/" + results.data.results[i].poster_path),
                })

            }
        }
        return (`${25} pages have been clonated succesfully, with a total amount of ${500} films`)
    };

module.exports = PeliculasController;