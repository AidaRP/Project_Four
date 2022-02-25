
const { default: axios } = require("axios");
const { Films } = require('../models/index');
const { Op } = require("sequelize");
const { compareSync } = require("bcrypt");


const FilmsController = {


//Controller Film Funtions

getFilms = (req, res) => {

},

filmRegister = (req, res) => {

},

titleFilms = async (req, res) => {

    let busqueda = req.query.criterio;

    try {

        let resultados;

        res.send(resultados.data);
        

    } catch (error) {
        console.log(error);
    }

},

getNews = async (req, res) => {

    try {

        let resultNews;

        res.send(resultNews.data);

    } catch (error) {
        console.log(error);
    }
},

favouriteFilms = (req,res) => {


    let titulo = req.query.titulo;
    let adult = req.query.adult;
    let popularity = req.query.popularity;

    findAll({
        where : {

            [Op.and] : [
                {
                    titulo : {
                        [Op.like] : titulo
                    }
                },
                {
                    adult : {
                        [Op.like] : adult
                    }
                },
                {
                    popularity : {
                        [Op.like] : popularity
                    }
                }
            ]

        }
    }).then(films => {

        if(films != 0){
            res.send(films);
        }else {
            res.send(`¡Holy 👼🏼 Shit💩! You have fucked up in favouriteFilms💔`);
        };

    }).catch(error => {
        res.send(error);
    })
},

adultFilms = (req,res) => {

    
    //All films that don't be for childrens

    findAll({
        where : {
            [Op.not] : [
                {
                    adult : {
                        [Op.like] : 0
                    }
                }
            ]
        }
    }).then(adultFilms => {
        if(adultFilms != 0){
            res.send(adultFilms);
        }else {
            res.send("Don't have films for childrens");
        }
    }).catch(error =>{
        res.send(error)
    })

   }
};


module.exports = FilmsController;