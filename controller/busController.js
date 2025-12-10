const connection = require('../utils/db-connection');
const db=require('../utils/db-connection')

const addEntries = (req, res) => {
    const { busNumber, totalSeats, availableSeats } = req.body;

    const insertQuery =
        'INSERT INTO Buses (busNumber, totalSeats, availableSeats) VALUES (?, ?, ?)';

    db.execute(insertQuery, [busNumber, totalSeats, availableSeats], (err) => {
        if (err) {
            console.log(err.message);
            return res.status(500).send(err.message);
        }

        res.status(201).send(`Bus ${busNumber} successfully added`);
    });
};

const getAvailableBuses = (req, res) => {
    const { seats } = req.params;

    const getQuery = `
        SELECT * FROM Buses
        WHERE availableSeats > ?
    `;

    db.execute(getQuery, [seats], (err, result) => {
        if (err) {
            console.log(err.message);
            return res.status(500).send(err.message);
        }

        if (result.length === 0) {
            return res.status(404).send('No buses found');
        }

        res.status(200).json(result);
    });
};


module.exports={addEntries,getAvailableBuses};