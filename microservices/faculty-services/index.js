const express = require('express');
const app = express();

app.use(express.json());

app.get('/faculty', (req, res) => {
    res.json([
        { id: 1, name: "Prof. Alice", expertise: "Backend Dev", deptId: 1 },
        { id: 2, name: "Prof. Charlie", expertise: "Robotics", deptId: 2 }
    ]);
});

app.listen(3004, () => {
    console.log(`Faculty Service running on http://localhost:3004/faculty`);
});