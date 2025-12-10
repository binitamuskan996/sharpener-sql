const db=require('../utils/db-connection')
const Bus=require('../models/buses')

const addEntries = async (req, res) => {
  try {
    const { busNumber, totalSeats, availableSeats } = req.body;

    const bus = await Bus.create({
      busNumber,
      totalSeats,
      availableSeats
    });

    console.log(`Bus added with id: ${bus.id}`);
    res.status(201).send(`Bus ${busNumber} successfully added`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }

    // const insertQuery =
    //     'INSERT INTO Buses (busNumber, totalSeats, availableSeats) VALUES (?, ?, ?)';

    // db.execute(insertQuery, [busNumber, totalSeats, availableSeats], (err) => {
    //     if (err) {
    //         console.log(err.message);
    //         return res.status(500).send(err.message);
    //     }

    //     res.status(201).send(`Bus ${busNumber} successfully added`);
    // });
};

const getAvailableBuses = async (req, res) => {
  try {
    const { seats } = req.params;

    const buses = await Bus.findAll({
      where: {
        availableSeats: {
          [require('sequelize').Op.gt]: seats
        }
      }
    });

    if (buses.length === 0) {
      return res.status(404).send('No buses found');
    }

    res.status(200).json(buses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }

    // const getQuery = `
    //     SELECT * FROM Buses
    //     WHERE availableSeats > ?
    // `;

    // db.execute(getQuery, [seats], (err, result) => {
    //     if (err) {
    //         console.log(err.message);
    //         return res.status(500).send(err.message);
    //     }

    //     if (result.length === 0) {
    //         return res.status(404).send('No buses found');
    //     }

    //     res.status(200).json(result);
    // });
};


module.exports={addEntries,getAvailableBuses};