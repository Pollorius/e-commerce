

const Orders = (sequelize, S) => {

  O = sequelize.define('orders', {
    id: {
      type: S.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    statusOpen: {
      type: S.BOOLEAN,
      allowNull: false
    },
    userId: {
      type: S.INTEGER,
      allowNull: false
    }

  });

  return O;
};


module.exports = Orders;
