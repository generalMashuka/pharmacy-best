const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BasketProduct extends Model {
    static associate() {

    }
  }
  BasketProduct.init({
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // primaryKey: true,
      onDelete: 'CASCADE',
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // primaryKey: true,
      onDelete: 'CASCADE',
    },
    count_item: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'BasketProduct',
  });
  return BasketProduct;
};
