const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Binita@123',
    database: 'testdb'
});
const createTable = (query) => {
    connection.execute(query, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Table is created");
    });
};
connection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Connection has been created");

    const studentsTable = `
        CREATE TABLE IF NOT EXISTS Students (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(20),
            email VARCHAR(255) UNIQUE,
            age INT  
            )
    `;
    const usersTable = `
        CREATE TABLE IF NOT EXISTS Users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255)
        )
    `;

    const busesTable = `
        CREATE TABLE IF NOT EXISTS Buses (
            id INT AUTO_INCREMENT PRIMARY KEY,
            busNumber VARCHAR(50),
            totalSeats INT,
            availableSeats INT
        )
    `;

    const bookingsTable = `
        CREATE TABLE IF NOT EXISTS Bookings (
            id INT AUTO_INCREMENT PRIMARY KEY,
            seatNumber INT
        )
    `;

    const paymentsTable = `
        CREATE TABLE IF NOT EXISTS Payments (
            id INT AUTO_INCREMENT PRIMARY KEY,
            amountPaid INT,
            paymentStatus VARCHAR(50)
        )
    `;

    // connection.execute((creationQuery), (err) => {
    //     if (err) {
    //         console.log(err);
    //         connection.end();
    //         return;
    //     }

    //     console.log("Table is created");
    // });
    createTable(studentsTable);
    createTable(usersTable);
    createTable(busesTable);
    createTable(bookingsTable);
    createTable(paymentsTable);
});
module.exports = connection;