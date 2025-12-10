const connection = require('../utils/db-connection');
const db=require('../utils/db-connection')

const addEntries=(req,res)=>{
const { email, name } = req.body;
    const insertQuery = 'INSERT INTO Users (email, name) VALUES (?, ?)';
    db.execute(insertQuery,[email,name],(err)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            connection.end();
            return;
        }
        console.log('Value has been inserted.');
        res.status(200).send(`User with name ${name} successfully added`);
    })
};
const getEntry = (req, res) => {
    const getQuery = "SELECT * FROM Users";

    db.execute(getQuery, (err, result) => {
        if (err) {
            console.log(err.message);
            return res.status(500).send(err.message);
        }

        if (result.length === 0) {
            return res.status(404).send("No users found");
        }

        res.status(200).json(result); 
    });
};

module.exports={addEntries,getEntry};