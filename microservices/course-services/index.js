const express = require('express');
const app = express();

app.use(express.json());

app.get('/courses', (req, res) => {
    res.json([
        { id: 101, title: "Node.js Basics", duration: "4 Weeks" },
        { id: 102, title: "Microservices 101", duration: "6 Weeks" }
    ]);
});

// Start the server on Port 3002
app.listen(3002, () => {
    console.log(`Course Service is running on http://localhost:3002/courses`);
});