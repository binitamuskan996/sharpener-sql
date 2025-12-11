const express = require('express');
const studentController = require('../controller/studentController');

const router = express.Router();

router.post('/add', studentController.addEntries);
router.put('/update/:id',studentController.updateEntry);
router.get('/get/:id',studentController.getEntryById);
router.get('/get',studentController.getEntry);
router.delete('/delete/:id',studentController.deleteEntry);
router.post('/addingStudentWithCard', studentController.addingValuesToStudentAndIdentityTable);

module.exports = router;
