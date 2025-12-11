const express = require('express');
const userController = require('../controller/userController');

const router = express.Router();

router.post('/add', userController.addEntries);
router.get('/get',userController.getEntry);
router.get('/:id/bookings', userController.getUserBookings);

module.exports = router;
