const express = require('express');
const db=require('./utils/db-connection')
const app = express();
const studentRoutes=require('./routes/studentsRoute');
const userRoutes=require('./routes/usersRoute');
const busRoutes=require('./routes/busesRoute');

app.use(express.json());              
app.get('/', (req, res) => {
    res.send('Hello world');
});
app.use('/students',studentRoutes)
app.use('/users',userRoutes)
app.use('/buses',busRoutes);
app.listen(3000, (err) => {
    console.log("Server is running");
});
