const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const Booking = sequelize.define('Booking', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  seatNumber: {
    type: DataTypes.INTEGER,
  }
});

module.exports = Booking;
