
require('dotenv').conf
module.exports = {
  //Añado en paralelo constantes para poder trabajar en local si no tengo las variables de entorno
    "development" : {
      "username": "b348a397488375",
      "password": "c8468879",
      "database": "heroku_9bf035dddaa4062",
      "host": "eu-cdbr-west-02.cleardb.net",
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
      "username": "b348a397488375",
      "password": "c8468879",
      "database": "heroku_9bf035dddaa4062",
      "host": "eu-cdbr-west-02.cleardb.net",
      "dialect": "mysql"
    }
  }