const db=require('../utils/db-connection')
const Student=require('../models/students')

const addEntries=async (req,res)=>{
    try {
        const {email , name}= req.body;
        const student = await Student.create({
            email:email,
            name:name
        });
        
        res.status(201).send(`User with name: ${name} is created!`);
        
    } catch (error) {
        res.status(500).send('Unable to make an entry.');
    }

// const insertQuery = 'INSERT INTO students (email, name,age) VALUES (?, ?, ?)';
    // db.execute(insertQuery,[email,name,age],(err)=>{
    //     if(err){
    //         console.log(err.message);
    //         res.status(500).send(err.message);
    //         connection.end();
    //         return;
    //     }
    //     console.log('Value has been inserted.');
    //     res.status(200).send(`Student with name ${name} successfully added`);
    // })
};
const updateEntry = async (req,res)=>{
    try {
        const {id}= req.params;
        const {name}= req.body;
        
        const student= await Student.findByPk(id);
        if(!student){
            res.status(404).send("User is not found");
        }
        
        student.name=name;
        await student.save();
        res.status(200).send("User has been updated!")
    } catch (error) {
        res.status(500).send("User cannot be updated");
    }
    // const updateQuery = "UPDATE students SET name = ?,email=? WHERE id = ?";

    // db.execute(updateQuery, [name,email, id], (err, result) => {
    //     if (err) {
    //         console.log(err.message);
    //         res.status(500).send(err.message);
    //         db.end();
    //         return;
    //     }

    //     if (result.affectedRows === 0) {
    //         res.status(404).send("Student not found");
    //         return;
    //     }

    //     res.status(200).send("Student has been updated");
    // });
};
const getEntry = (req, res) => {
    const getQuery = "SELECT * FROM students";

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
const getEntryById = (req, res) => {
    const { id } = req.params;
    const getQuery = "SELECT * FROM students WHERE id=?";

    db.execute(getQuery,[id], (err, result) => {
        if (err) {
            console.log(err.message);
            return res.status(500).send(err.message);
        }

        if (result.length === 0) {
            return res.status(404).send(`Users not found with id ${id}`);
        }

        res.status(200).json(result); 
    });
};
const deleteEntry= async(req,res)=>{
    try {
        const {id}= req.params;
        const student= await Student.destroy({
            where:{
                id:id
            }
        });
        
        if(!student){
            res.status(404).send('User is not found');
        }
        res.status(200).send('User is deleted');
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error encountered while deleting.');
    }
    // const deleteQuery= `DELETE FROM students where id= ?`;
    
    // db.execute(deleteQuery, [id], (err,results)=>{
    //     if(err){
    //         console.log(err.message);
    //         res.status(500).send(err.message);
    //     }
        
    //     if(results.affectedRows===0){
    //         res.status(404).send("Student is not found");
    //         return;
    //     }
        
    //     res.status(200).send(`User with ${id} is deleted`);
    // })
}
module.exports={addEntries,updateEntry,getEntry,getEntryById,deleteEntry};