const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FavoriteProduct extends Model {
    static associate() {

    }
  }
  FavoriteProduct.init({
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      onDelete: 'CASCADE',
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      onDelete: 'CASCADE',
    },
  }, {
    sequelize,
    modelName: 'FavoriteProduct',
  });
  return FavoriteProduct;
};
