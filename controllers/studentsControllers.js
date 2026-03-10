// Define students array
let students = [
    { id: 1, name: 'Alice', dob: '2003-01-01', college: "ATM", age: 20 },
    { id: 2, name: 'Bob', dob: '2001-05-15', college: "ATME", age: 22 },
    { id: 3, name: 'Charlie', dob: '2002-08-20', college: "ATME", age: 21 }
];

const getAllStudents = (req, res) => {
    res.json(students);
}

const createStudent = (req, res) => {
    const newStudent = req.body; 
    students.push(newStudent); 

    res.status(201).json({ 
        message: 'Student created successfully', 
        student: newStudent
    });
}

//  Function to get student by ID
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

    //If student doesn't exist, send error message else, send student data.
    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
}

// Function to get all courses
const getAllCourses = (req, res) => {
    const courses = [
        { id: 1, title: "AIML", duration: "4 Years" },
        { id: 2, title: "Data Science", duration: "4 Years" },
        { id: 3, title: "Cyber Security", duration: "4 Years" }
    ];
    res.json(courses);
};

// Function to get all colleges
const getAllColleges = (req, res) => {
    const colleges = [
        { id: 1, name: "ATME College of Engineering", location: "Mysuru" },
        { id: 2, name: "MIT Mysore", location: "Mysuru" },
        { id: 3, name: "SJCE", location: "Mysuru" }
    ];
    res.json(colleges);
};

// Function to update a student by ID
const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedData = req.body;
    res.json({
        message: `Student with ID ${id} updated successfully`,
        updatedInfo: updatedData
    });
}

// Function to delete a student by ID
const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id);
    res.json({
        message: `Student with ID ${id} deleted successfully`
    });
}

// Export the functions so the routes file can call them
module.exports = {
    getAllStudents,
    createStudent,
    getStudentById,
    getAllStudents,
    getAllCourses,
    getAllColleges,
    updateStudent,
    deleteStudent
}