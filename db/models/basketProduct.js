const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BasketProduct extends Model {
    static associate({ Product }) {
      BasketProduct.Product = BasketProduct.belongsTo(Product, { foreignKey: 'product_id' });
    }
  }
  BasketProduct.init(
    {
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
    },
    {
      sequelize,
      modelName: 'BasketProduct',
    }
  );
  return BasketProduct;
};
