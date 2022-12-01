const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BasketProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
