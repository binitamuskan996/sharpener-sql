const db=require('../utils/db-connection')
const User=require('../models/users')

const addEntries=async (req, res) => {
  try {
    const { email, name } = req.body;

    const user = await User.create({
      email,
      name
    });
    res.status(201).send(`User with name ${name} successfully added`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
    // const insertQuery = 'INSERT INTO Users (email, name) VALUES (?, ?)';
    // db.execute(insertQuery,[email,name],(err)=>{
    //     if(err){
    //         console.log(err.message);
    //         res.status(500).send(err.message);
    //         connection.end();
    //         return;
    //     }
    //     console.log('Value has been inserted.');
    //     res.status(200).send(`User with name ${name} successfully added`);
    // })
};
const getEntry =async (req, res) => {
  try {
    const users = await User.findAll();

    if (users.length === 0) {
      return res.status(404).send("No users found");
    }

    res.status(200).json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
    // const getQuery = "SELECT * FROM Users";

    // db.execute(getQuery, (err, result) => {
    //     if (err) {
    //         console.log(err.message);
    //         return res.status(500).send(err.message);
    //     }

    //     if (result.length === 0) {
    //         return res.status(404).send("No users found");
    //     }

    //     res.status(200).json(result); 
    // });
};

module.exports={addEntries,getEntry};