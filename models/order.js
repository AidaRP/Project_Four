'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    filmId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    rent_out_date: DataTypes.DATEONLY,
    return_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};