'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Order, {
        foreignKey: 'filmId'
      });
      // define association here
    }
  }
  Film.init({
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    actors: DataTypes.STRING,
    gender: DataTypes.STRING,
    city: DataTypes.STRING,
    rent_out: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Film',
  });
  return Film;
};