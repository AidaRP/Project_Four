
const { Pelicula } = require('../models/index');
const { Op } = require("sequelize");



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
    Pelicula.findOne({ where : { titulo : req.body.titulo }})
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
            
            titulo:peli.titulo,
            sinopsis:peli.sinopsis,
            adult:peli.adult,
            popularity:peli.popularity,
            image:peli.image,
            fecha:peli.fecha,
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


module.exports = PeliculasController;