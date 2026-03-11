const fs = require('fs');
const path = require('path');

// Function to find the file path
const dbPath = path.join(__dirname, '../database.json');

// READ data from the JSON file
const readData = () => {
    const data = fs.readFileSync(dbPath);
    return JSON.parse(data);
};

// WRITE data to the JSON file
const writeData = (data) => {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

// function to fetch all students
const getAllStudents = (req, res) => {
    const data = readData();
    res.json(data.students);
};

// function to get a student by ID
const getStudentById = (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const student = data.students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
};

// function to create a new student
const createStudent = (req, res) => {
    const data = readData();
    const newStudent = req.body;

    data.students.push(newStudent);
    writeData(data);

    res.status(201).json({ 
        message: 'Student created successfully', 
        student: newStudent 
    });
};

// function to delete student by ID
const deleteStudent = (req, res) => {
    let data = readData();
    const id = parseInt(req.params.id);
    const initialLength = data.students.length;

    data.students = data.students.filter(s => s.id !== id);

    if (data.students.length < initialLength) {
        writeData(data);
        res.json({ message: `Student ${id} deleted` });
    } else {
        res.status(404).json({ message: "Student not found" });
    }
};

module.exports = { 
    getAllStudents, 
    getStudentById,
    createStudent, 
    deleteStudent,
};