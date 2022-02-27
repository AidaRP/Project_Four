'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('orders', 
    [
      {"filmId":7,"userId":1,"rent_out_date":"2022-03-07","return_date":"2022-03-12","createdAt":"2022-02-28","updatedAt":"2022-02-28"},
      {"filmId":5,"userId":3,"rent_out_date":"2022-03-15","return_date":"2022-03-20","createdAt":"2022-02-28","updatedAt":"2022-02-28"},
      {"filmId":4,"userId":5,"rent_out_date":"2022-03-22","return_date":"2022-03-27","createdAt":"2022-02-28","updatedAt":"2022-02-28"},
      {"filmId":2,"userId":7,"rent_out_date":"2022-03-24","return_date":"2022-03-29","createdAt":"2022-02-28","updatedAt":"2022-02-28"},
      {"filmId":1,"userId":8,"rent_out_date":"2022-03-13","return_date":"2022-03-18","createdAt":"2022-02-28","updatedAt":"2022-02-28"},
      {"filmId":9,"userId":4,"rent_out_date":"2022-03-12","return_date":"2022-03-17","createdAt":"2022-02-28","updatedAt":"2022-02-28"},
      {"filmId":8,"userId":2,"rent_out_date":"2022-03-21","return_date":"2022-03-26","createdAt":"2022-02-28","updatedAt":"2022-02-28"}

    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('orders', null, {});

  }
};