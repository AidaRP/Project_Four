
const { default: axios } = require("axios");
const { Films } = require('../models/index');
const { Op } = require("sequelize");
const { compareSync } = require("bcrypt");




//Films Controller Functions

const FilmsController = {};

FilmsController.getFilms = (req, res) => {

},

FilmsController.filmRegister = (req, res) => {

},

FilmsController.titleFilms = async (req, res) => {

    let busqueda = req.query.title;

    try {

        let results;

        res.send(results.data);
        

    } catch (error) {
        console.log(error);
    }

},

FilmsController.getNews = async (req, res) => {

    try {

        let resultNews;

        res.send(resultNews.data);

    } catch (error) {
        console.log(error);
    }
},

FilmsController.favouriteFilms = (req,res) => {


    let title = req.query.title;
    let adult = req.query.adult;
    let popularity = req.query.popularity;

    findAll({
        where : {

            [Op.and] : [
                {
                    title : {
                        [Op.like] : title
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

FilmsController.adultFilms = (req,res) => {

    
    //All films that don't be for childrens

    FilmsController.findAll({
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



module.exports = FilmsController;