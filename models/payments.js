const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const Payment = sequelize.define('Payment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  amountPaid: {
    type: DataTypes.INTEGER,
  },
  paymentStatus: {
    type: DataTypes.STRING,
  }
});

module.exports = Payment;
