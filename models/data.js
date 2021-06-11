'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Data.init({
    name: DataTypes.STRING,
    last: DataTypes.STRING,
    buy: DataTypes.STRING,
    sell: DataTypes.STRING,
    volume: DataTypes.STRING,
    base_unit: DataTypes.STRING,
    quote_unit: DataTypes.STRING,
    low: DataTypes.STRING,
    high: DataTypes.STRING,
    type: DataTypes.STRING,
    open: DataTypes.FLOAT,
    at: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Data',
  });
  return Data;
};