const express = require('express');
const app = express();

app.use(express.json());

app.get('/students', (req, res) => {
    res.json([
        { id: 1, name: "Alice", age: 20 },
        { id: 2, name: "Bob", age: 22 }
    ]);
});

// Start the server
app.listen(3001, () => {
    console.log(`Student Service is running on http://localhost:3001/students`);
});