const getAllStudents = (req, res) => {
    res.json([
        { id: 1, name: 'Alice', dob: '2003-01-01', college: "ATM", age: 20 },
        { id: 2, name: 'Bob', dob: '2001-05-15', college: "ATME", age: 22 },
        { id: 3, name: 'Charlie', dob: '2002-08-20', college: "ATME", age: 21 }
    ]);
}

const createStudent = (req, res) => {
    const student = req.body;
    res.json({ message: 'Student created successfully', student });
}

module.exports = {
    getAllStudents,
    createStudent
}