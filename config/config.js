
require('dotenv').conf
module.exports = {
  //Añado en paralelo constantes para poder trabajar en local si no tengo las variables de entorno
    "development" : {
      "username": process.env.DB_USERNAME || "root",
      "password": process.env.DB_PASSWORD || "flowto2000",
      "database": process.env.DB_DATABASE || "Project_four",
      "host": process.env.DB_HOST || "127.0.0.1",
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    //Este será el entorno con el que trabajará Heroku
    "production": {
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_DATABASE,
      "host": process.env.DB_HOST,
      "dialect": "mysql"
    }
  }