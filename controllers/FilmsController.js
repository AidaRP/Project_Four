
//DB Importation
const db = require("../models");
const films = db.film;
const Op = db.Sequelize.Op; 

const FilmController = {};


//Function that Get All films
FilmController.getAll = (req,res) => {

     try {
        res.send(data);
    } catch (error) {
        console.log('¡Holy 👼🏼 Shit💩! You have fucked up in get All💔')
    }
}