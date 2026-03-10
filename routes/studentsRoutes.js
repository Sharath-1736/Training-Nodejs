const express = require('express');
const router = express.Router(); // Create a router object to handle sub-routes

// Import Functions from the controllers folder
const studentsController = require('../controllers/studentsControllers');

// Fetches the list of all students
router.get('/students', studentsController.getAllStudents);

// Adds a new student to the system
router.post('/students', studentsController.createStudent);

// Fetches the details of a student by their ID
router.get('/students/:id', studentsController.getStudentById);

// Delete student by ID
router.delete('/students/:id', studentsController.deleteStudent);

// Export the router so index.js can use it
module.exports = router;