const { default: axios } = require("axios");
const { Films } = require('../models/index');
const { Op } = require("sequelize");
const { compareSync } = require("bcrypt");
const FilmsList = require('../seeders/01-demo-films')

const FilmsController = {};

FilmsController.newFilms = (req, res) => {

        Films.create({
            title: req.body.title,
            year : req.body.year,
            actors : req.body.actors,
            gender: req.body.gender,
            city: req.body.city,
            rent_out: req.body.rent_out
        })
        .then(film => {
            res.send(film);
        })
        .catch(err => {
            res.send(err);
        })

};

module.exports = FilmsController;