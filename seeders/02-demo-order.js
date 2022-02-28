'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('orders', 
    [
      {"filmId":5,"userId":5,"rent_out_date":"2022-03-07","return_date":"2022-03-12","createdAt":"2022-02-28","updatedAt":"2022-02-28"},
      {"filmId":25,"userId":10,"rent_out_date":"2022-03-15","return_date":"2022-03-20","createdAt":"2022-02-28","updatedAt":"2022-02-28"},
      {"filmId":45,"userId":15,"rent_out_date":"2022-03-22","return_date":"2022-03-27","createdAt":"2022-02-28","updatedAt":"2022-02-28"},
      {"filmId":55,"userId":20,"rent_out_date":"2022-03-24","return_date":"2022-03-29","createdAt":"2022-02-28","updatedAt":"2022-02-28"},
      {"filmId":15,"userId":25,"rent_out_date":"2022-03-13","return_date":"2022-03-18","createdAt":"2022-02-28","updatedAt":"2022-02-28"},
      {"filmId":95,"userId":30,"rent_out_date":"2022-03-12","return_date":"2022-03-17","createdAt":"2022-02-28","updatedAt":"2022-02-28"},
      {"filmId":35,"userId":35,"rent_out_date":"2022-03-21","return_date":"2022-03-26","createdAt":"2022-02-28","updatedAt":"2022-02-28"}

    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('orders', null, {});

  }
};