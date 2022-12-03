const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate() {}
  }
  Order.init(
    {
      email_user: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      product_list: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      total_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );
  return Order;
};
