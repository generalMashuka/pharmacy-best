const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ BasketProduct, FavoriteProduct, User }) {
      Product.BoughtBy = Product.belongsToMany(User, { foreignKey: 'product_id', through: BasketProduct });
      Product.FavoriteProducts = Product.hasMany(FavoriteProduct, { foreignKey: 'product_id' });
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
