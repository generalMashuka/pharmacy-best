const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ BasketProduct, FavoriteProduct, User }) {
      Product.BasketProducts = Product.belongsToMany(User, { foreignKey: 'product_id', through: BasketProduct });
      Product.FavoriteProducts = Product.belongsToMany(User, { foreignKey: 'product_id', through: FavoriteProduct });
    }
  }
  Product.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    full_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sale_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    img: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
