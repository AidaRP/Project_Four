'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('orders', 
    [
      {"usuarioId":10,  "peliculaId":1,     "alquilada":false, "precio":"5", "fecha":"2022-03-12","fechaDev":"2022-03-12", "createdAt":"2022-02-28", "updatedAt":"2022-02-28"},
      {"usuarioId":20,  "peliculaId":21,    "alquilada":true,  "precio":"5", "fecha":"2022-03-20","fechaDev":"2022-03-12", "createdAt":"2022-02-28", "updatedAt":"2022-02-28"},
      {"usuarioId":30,  "peliculaId":31,    "alquilada":false, "precio":"5", "fecha":"2022-03-27","fechaDev":"2022-03-12", "createdAt":"2022-02-28", "updatedAt":"2022-02-28"},
      {"usuarioId":40,  "peliculaId":51,    "alquilada":true,  "precio":"5", "fecha":"2022-03-29","fechaDev":"2022-03-12", "createdAt":"2022-02-28", "updatedAt":"2022-02-28"},
      {"usuarioId":50,  "peliculaId":61,    "alquilada":false, "precio":"5", "fecha":"2022-03-18","fechaDev":"2022-03-12", "createdAt":"2022-02-28", "updatedAt":"2022-02-28"},
      {"usuarioId":60,  "peliculaId":91,    "alquilada":false, "precio":"5", "fecha":"2022-03-17","fechaDev":"2022-03-12", "createdAt":"2022-02-28", "updatedAt":"2022-02-28"},
      {"usuarioId":70,  "peliculaId":191,   "alquilada":false, "precio":"5", "fecha":"2022-03-26","fechaDev":"2022-03-12", "createdAt":"2022-02-28", "updatedAt":"2022-02-28"}

    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('orders', null, {});

  }
};