const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Binita@123',
    database: 'testdb'
});

connection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Connection has been created");

    const creationQuery = `
        CREATE TABLE IF NOT EXISTS Students (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(20),
            email VARCHAR(20)
        )
    `;
    // const usersTable = `
    //     CREATE TABLE Users (
    //         id INT AUTO_INCREMENT PRIMARY KEY,
    //         name VARCHAR(255),
    //         email VARCHAR(255)
    //     )
    // `;

    // const busesTable = `
    //     CREATE TABLE  Buses (
    //         id INT AUTO_INCREMENT PRIMARY KEY,
    //         busNumber VARCHAR(50),
    //         totalSeats INT,
    //         availableSeats INT
    //     )
    // `;

    // const bookingsTable = `
    //     CREATE TABLE Bookings (
    //         id INT AUTO_INCREMENT PRIMARY KEY,
    //         seatNumber INT
    //     )
    // `;

    // const paymentsTable = `
    //     CREATE TABLE Payments (
    //         id INT AUTO_INCREMENT PRIMARY KEY,
    //         amountPaid INT,
    //         paymentStatus VARCHAR(50)
    //     )
    // `;

    // connection.query(usersTable);
    // connection.query(busesTable);
    // connection.query(bookingsTable);
    // connection.query(paymentsTable);

    connection.execute(creationQuery, (err) => {
        if (err) {
            console.log(err);
            connection.end();
            return;
        }

        console.log("Table is created");
    });

});
module.exports=connection;