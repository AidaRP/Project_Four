'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('pedidos', 
    [
      {"peliculaId":5,"usuarioId":5,"alquilada":"2022-03-07","fin_alquiler":"2022-03-12","createdAt":"2022-02-28","updatedAt":"2022-02-28"},
      {"peliculaId":25,"usuarioId":10,"alquilada":"2022-03-15","fin_alquiler":"2022-03-20","createdAt":"2022-02-28","updatedAt":"2022-02-28"},
      {"peliculaId":45,"usuarioId":15,"alquilada":"2022-03-22","fin_alquiler":"2022-03-27","createdAt":"2022-02-28","updatedAt":"2022-02-28"},
      {"peliculaId":55,"usuarioId":20,"alquilada":"2022-03-24","fin_alquiler":"2022-03-29","createdAt":"2022-02-28","updatedAt":"2022-02-28"},
      {"peliculaId":15,"usuarioId":25,"alquilada":"2022-03-13","fin_alquiler":"2022-03-18","createdAt":"2022-02-28","updatedAt":"2022-02-28"},
      {"peliculaId":95,"usuarioId":30,"alquilada":"2022-03-12","fin_alquiler":"2022-03-17","createdAt":"2022-02-28","updatedAt":"2022-02-28"},
      {"peliculaId":35,"usuarioId":35,"alquilada":"2022-03-21","fin_alquiler":"2022-03-26","createdAt":"2022-02-28","updatedAt":"2022-02-28"}

    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('pedidoss', null, {});

  }
};