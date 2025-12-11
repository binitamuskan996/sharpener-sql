const express = require('express');
const db=require('./utils/db-connection')
const app = express();
const studentRoutes=require('./routes/studentsRoute');
const userRoutes=require('./routes/usersRoute');
const busRoutes=require('./routes/busesRoute');
const courseRoutes=require('./routes/courseRoutes');
// const studentModel=require('./models/students')
// const userModel=require('./models/users');
// const busModel=require('./models/buses');
// const bookingModel=require('./models/bookings');
// const paymentModel=require('./models/payments');
require('./models')
app.use(express.json());              
app.get('/', (req, res) => {
    res.send('Hello world');
});
app.use('/students',studentRoutes)
app.use('/users',userRoutes)
app.use('/buses',busRoutes);
app.use('/courses',courseRoutes)

// app.listen(3000, (err) => {
//     console.log("Server is running");
// });

db.sync({force:false}).then(()=>{
    app.listen(3000,()=>{
        console.log("Server is running");
    });
}).catch((err)=>{
    console.log(err);
})
