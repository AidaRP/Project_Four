'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    static associate(models) {
      this.belongsTo(models.films, {
        foreignKey: 'filmsId'
      });
      this.belongsTo(models.users, {
        foreignKey: 'usersId'
      });
    }
  };
  orders.init({
    films: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER,
    fecha_alquiler: DataTypes.DATE,
    fecha_devolucion: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};