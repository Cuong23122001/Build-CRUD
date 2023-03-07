const Student = require("../model/Student");


const getStudent = (req, res) => {
    Student.find((err, students) => {
        if (err) {
            res.send(err);
        }
        res.json(students);
    });
};
const createStudent = (req, res) => {
    const students = new Student({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
    })
    students.save((err, students) => {
        if (err) {
            res.send(err);
        }
        res.json(students);
    });
}
module.exports = {
    getStudent, createStudent,
};