const express = require('express');
const app = express();
app.use(express.json());

app.get('/departments', (req, res) => {
    res.json([
        { id: 1, name: "Computer Science", head: "Dr. Smith" },
        { id: 2, name: "Mechanical Engineering", head: "Dr. Jones" }
    ]);
});

app.listen(3003, () => {
    console.log(`Department Service running on http://localhost:3003/departments`);
});