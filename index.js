const express = require('express'); // Import the Express framework
const app = express(); // Initialize the Express application

// Middleware to parse incoming JSON data from request bodies
app.use(express.json()); 

// Import the routing logic from the routes folder
const studentsRoutes = require('./routes/studentsRoutes');

// Link all routes starting with '/api' to the studentsRoutes file
app.use('/api', studentsRoutes);

// Define the port and start the server
app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000/api/students`);
});