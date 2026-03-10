const express = require('express');
const router = express.Router(); // Create a router object to handle sub-routes

// Import the logic functions from the controllers folder
const studentsController = require('../controllers/studentsControllers');

// Fetches the list of all students
router.get('/students', studentsController.getAllStudents);

// Adds a new student to the system
router.post('/students', studentsController.createStudent);

// Fetches the details of a student by their ID
router.get('/students/:id', studentsController.getStudentById);

// Course routes
router.get('/courses', studentsController.getAllCourses);

// College routes
router.get('/colleges', studentsController.getAllColleges);

// Update student by ID
router.put('/students/:id', studentsController.updateStudent);

// Delete student by ID
router.delete('/students/:id', studentsController.deleteStudent);

// Export the router so index.js can use it
module.exports = router;