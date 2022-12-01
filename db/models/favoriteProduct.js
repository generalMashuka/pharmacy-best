const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FavoriteProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Product }) {
      FavoriteProduct.belongsTo(User, { foreignKey: 'user_id' });
      FavoriteProduct.belongsTo(Product, { foreignKey: 'product_id' });
    }
  }
  FavoriteProduct.init({
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      onDelete: 'CASCADE',
    },
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      onDelete: 'CASCADE',
    },
  }, {
    sequelize,
    modelName: 'FavoriteProduct',
  });
  return FavoriteProduct;
};
