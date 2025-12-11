const { Booking } = require('../models');

const createBooking = async (req, res) => {
  try {
    const { userId, busId, seatNumber } = req.body;

    const booking = await Booking.create({
      userId,
      busId,
      seatNumber
    });

    res.status(201).json(booking);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
};

module.exports = { createBooking, getUserBookings: require('./userController').getUserBookings };
