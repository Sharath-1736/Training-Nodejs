const express = require('express');
const app = express();
app.use(express.json());

const studentsRoutes = require('./routes/studentsRoutes');

app.use('/api', studentsRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/api/students');
});