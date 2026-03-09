const getAllStudents = (req, res) => {
    const students = [
        { id: 1, name: 'Alice', dob: '2003-01-01', college: "ATM", age: 20 },
        { id: 2, name: 'Bob', dob: '2001-05-15', college: "ATME", age: 22 },
        { id: 3, name: 'Charlie', dob: '2002-08-20', college: "ATME", age: 21 }
    ];
    res.json(students);
}

const createStudent = (req, res) => {
    // req.body contains the data sent by the client to create a new student
    const student = req.body; 
    
    // Send a success message along with the data received
    res.status(201).json({ 
        message: 'Student created successfully', 
        student 
    });
}

const getStudentById = (req, res) => {
    const students = [
        { id: 1, name: 'Alice', dob: '2003-01-01', college: "ATM", age: 20 },
        { id: 2, name: 'Bob', dob: '2001-05-15', college: "ATME", age: 22 },
        { id: 3, name: 'Charlie', dob: '2002-08-20', college: "ATME", age: 21 }
    ];

    //Get the ID from the URL
    const id = parseInt(req.params.id);

    //Find the student with that ID
    const student = students.find(s => s.id === id);

    //If student doesn't exist, send 404. Otherwise, send student data.
    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
}

// Export the functions so the routes file can call them
module.exports = {
    getAllStudents,
    createStudent,
    getStudentById
}